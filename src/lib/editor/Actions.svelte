<script>
  import Icon, {Download, Upload, Check, ChevronLeft} from 'svelte-hero-icons';
  import {tick} from 'svelte';
  import {THEME, preview} from '$lib/stores';
  import tooltip from '$lib/directives/tooltip';
  import {goto} from '$app/navigation';
  import {between, getUrl} from '$lib/helpers';
  import * as FileSaver from 'file-saver';

  // Components
  import Message from '../components/Message.svelte';
  import Modal from '../components/Modal.svelte';
  import Donate from '../components/Donate.svelte';
  import Button from '../components/Button.svelte';

  let value = '';
  let error = '';

  let backModal = false;
  let donateModal = false;

  function validate() {
    const check = /[!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?]+/;
    if (value.length < 1) {
			error = 'Your theme name must be longer than 1 character';
			return false;
    } else if (check.test(value)) {
			error = 'Your theme name cannot contain any special characters';
			return false;
    } else {
			error = '';
			return true;
    }
  }

  // Downloading a theme file:
  function download() {
    if (validate()) {
      $THEME.meta.name = value;

      let save;

      // Meta
      save = `/**\n${Object.entries($THEME.meta).map(([key, value]) => ` * @${key} ${value}\n`).join('')}*/\n\n`;

      // Fonts
      save += $THEME.fonts ? $THEME.fonts.map(url => `@import url('${url}');\n`).join('') : '';

      // Imports
      save += $THEME.imports.map(link => `@import url('${link}');\n`).join('');
      let addonImports = $THEME.addons.filter(obj => obj.use == true);
      addonImports.forEach(obj => obj.imports.forEach(link => save += `@import url('${link}');\n`));

      // Variables
      save += '\n:root {\n';
      save += vars($THEME.variables, 'theme');
      if ($THEME.hiddenVars) save += vars($THEME.hiddenVars, 'hidden');
      save += vars($THEME.addons, 'addon');
      save += '}';

      let file = new Blob([save], {type: 'text/plain;charset=utf-8'});
      FileSaver.saveAs(file, `${value}.theme.css`);

      const hasPaypal = $THEME.developers.some(el => el.paypal);
      if (!localStorage.getItem(`${$THEME.name}-donate`) && hasPaypal) {
        donateModal = true;
      }
    }
  }

  function vars(vars, type) {
    let object = [];
    if (type === 'addon') vars = vars.filter(obj => obj.use == true);

    if (type == 'theme' || type == 'addon') {
      vars.forEach(group => {
        const inputs = type == 'theme' ? group.inputs : group.variables;
        inputs.forEach(input => {
          object = [...object, varOutput(input.details)]
        })
      })
    } else {
      vars.forEach(input => {
        object = [...object, varOutput(input)];
      })
    }

    return object.map(({variable, output}) => `  --${variable}: ${output};\n`).join('');
  }
  function varOutput(input) {
    let output = ((input.value || input.start) || 0)+(input?.unit || '');
    if (typeof output === 'string' && (output.includes('http') || output.includes('base64'))) {
      output = `url('${output}')`;
    }
    return {
      variable: input.variable,
      output
    }
  }

  // Importing a theme file:
  let uploadedFile: FileList;
  let fileInput: HTMLInputElement;

  function upload() {
    const reader = new FileReader();
    
    // Check if file type is allowed
    if (uploadedFile[0] && !['text/css'].includes(uploadedFile[0].type)) {
      error = 'That file type cannot be imported.';
      return false;
    }

    reader.readAsText(uploadedFile[0]);
    reader.onload = e => {
      const result = e.target.result.toString();
      error = '';

      // // Check if imported theme is allowed based off @source meta field
      const source = between(result, '/**', '*/').split('\n').find(el => el.includes('source')).split(' ').pop();
      if ($THEME.meta.source !== source) {
        error = `That theme file is not compatible. Only themes with the base of ${$THEME.name} can be imported.`;
        return false;
      }

      // All imports
      const imports = result.split('\n').filter(el => el.includes('@import'));
      const addonUrls = ['ServerColumns', 'HorizontalServerList', 'RadialStatus'];

      // Font imports
      const fonts = imports.filter(el => el.includes('fonts'));

      // Add theme imports into THEME store
      $THEME.fonts = fonts.map(url => getUrl(url));
      if (fonts.length > 0) {
        let index = 0;
        // Insert Google Fonts into previewer
        fonts.forEach(url => {
          if (!$preview.querySelector(`#font-${index}`)) {
            let style = document.createElement('style');
            style.setAttribute('id', `font-${index}`);
            style.setAttribute('class', 'customfont');
            style.innerText = url;
            $preview.querySelector('head').appendChild(style);
          }
          index++;
        })
      }

      // Theme imports
      $THEME.imports = imports.filter(el => !el.includes('fonts')).map(url => getUrl(url));

      // Insert addon imports into previewer and enable addon checkboxes
      imports.filter(a => addonUrls.find(b => a.includes(b))).forEach(async el => {
        const url = getUrl(el);
        const selector = (url.includes('Columns') ? 'columns' : (url.includes('Horizontal') ? 'hsl' : 'rs'));

        await tick();

        // Set checkboxes
        const checkbox = document.querySelector(`input[type="checkbox"][value="${selector}"`) as HTMLInputElement;
        const addonBody = checkbox.closest('header').nextElementSibling;

        addonBody.classList.remove('hidden');
        addonBody.classList.add('block');
        checkbox.checked = true;

        // Insert addon into previewer
        const styleTag = document.createElement('style');
        styleTag.setAttribute('class', selector);
        styleTag.textContent = `@import url('${url}')`;
        $preview.querySelector('head').appendChild(styleTag);
      })

      // Root variables
      between(result, '{', '}').split('\n').filter(el => el.includes('--')).map(line => line.replace('--', '').trim()).filter(el => el).forEach(line => {
        let [key, value] = line.split(/:(.+)/);
        value = value.replace(/;/g, '').trim();
        if (value.includes('/*')) value = value.split('/*')[0].trim();

        // Add css variable to previewer
        $preview.style.setProperty(`--${key}`, value.replace(/;/g, ''));

        // If value incudes url; strip url
        if (value.includes('url')) value = getUrl(value);

        // Update THEME & currentAddon variables to set inputs
        const stores = [...$THEME.variables, ...$THEME.addons];

        stores.forEach(el => {
          const target = el.selector ? el.variables : el.inputs;
          target.forEach(input => {
            if (input.details.variable === key) {
              const output = input.type === 'select' ? value : value.replace(/px|%|deg/g, '');
              input.details.value = output;
            }
          })
        })
      })
    }
  }

  // Go back to theme selection:
  async function back() {
    backModal = false;
    setTimeout(() => {
      goto('/editor');
    }, 300);
  }
</script>

<Donate show={donateModal} on:closed={() => donateModal = false} />

<div class="p-4 border-b border-gray-700">
  <div class="flex mb-4">
    <Button variant="secondary" class="mr-4" on:click={() => backModal = true}>
      <Icon src={ChevronLeft} size="18" />
    </Button>
    <input class="input" type="text" placeholder="Theme name" class:error bind:value on:keyup={validate}>
  </div>
  <div class="flex">
    <div class="flex-1 mr-4" use:tooltip={{content: 'Import themes you previously made', delay: [1000, 0]}}>
      <Button variant="secondary" class="w-full" on:click={() => fileInput.click()}>
        <Icon src={Upload} size="18" class="mr-2" /> Import
      </Button>
      <input bind:this={fileInput} type="file" bind:files={uploadedFile} hidden on:change={upload}>
    </div>
    <Button variant="primary" colour="emerald" class="flex-1" disabled={error} on:click={download}>
      <Icon src={Download} size="18" class="mr-2" /> Download
    </Button>
  </div>
  <Message type="error" message={error} />
</div>

<Modal show={backModal} on:close={() => backModal = false}>
  <header class="p-4">
    <h2 class="font-display text-xl text-white">Back to theme selection?</h2>
  </header>
  <section class="px-4 pb-4">
    <p>Any changes will <u>NOT</u> be saved</p>
  </section>
  <footer class="p-4 flex justify-end bg-gray-900">
    <Button variant="secondary" class="mr-2" on:click={() => backModal = false}>Close</Button>
    <Button variant="primary" colour="emerald" class="btn primary green" on:click={back}>
      <Icon src={Check} size="18" /> <span class="btn-text">Go back</span>
    </Button>
  </footer>
</Modal>