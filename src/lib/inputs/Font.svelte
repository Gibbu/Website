<script>
  import {preview, THEME} from '$lib/stores';
	import {createEventDispatcher} from 'svelte';
  const dispatch = createEventDispatcher();

  // Components
  import Message from '../components/Message.svelte';

  // Required input vars
  export let variable: string;
  export let value: string;
  export let index: number;
  export let title: string;

  let local = false;
  $: if (local) {
    if ($preview.querySelector(`#font-${index}`)) {
      $preview.querySelector(`#font-${index}`).remove();
    }
    $THEME.fonts.splice(index, 1);
  }

  const update = () => {
    const font = value.split(',').map(font => font.trim());
    const output = font.map(font => `'${font}'`);

    if (!value.includes('Whitney') && !local) {
      const url = `https://fonts.googleapis.com/css2?family=${font[0].replace(/ /g, '+')}:wght@100;300;400;500;700&display=swap`;
      const fontUrl = `@import url('${url}')`;

      $THEME.fonts[index] = url;

      if (!$preview.querySelector(`#font-${index}`)) {
        let style = document.createElement('style');
        style.setAttribute('id', `font-${index}`)
        style.setAttribute('class', 'customfont');
        style.innerText = fontUrl;
        $preview.querySelector('head').appendChild(style);
      } else {
        $preview.querySelector(`#font-${index}`).innerText = fontUrl;
      }
    }
    if (value.length > 0) {
      dispatch('update', {variable, "value": output.join(',')})
      $preview.style.setProperty(`--${variable}`, output.join(','));
    }
  }
</script>

{#if title}
  <header class="mb-2">
    <p class="flex items-center">{title}</p>
  </header>
{/if}
<div>
  <input type="text" class="input" placeholder="Font name" bind:value on:change={update}>
  <small class="text-sm text-gray-400">Click away or press enter to update preview</small>
</div>

<div class="mt-4">
  <label class="flex items-center cursor-pointer">
    <input type="checkbox" class="text-emerald-500 w-5 h-5 border-0 cursor-pointer rounded-sm focus:ring-emerald-500 focus:ring-offset-gray-800" bind:checked={local}>
    <span class="ml-2 select-none">Use font installed on my computer</span>
  </label>
  {#if !local}
    <Message type="hint" message={`Fonts provided by Google. View all available fonts <a href="https://fonts.google.com" class="link" target="_blank">HERE</a>`} />
  {/if}
</div>