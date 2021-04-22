<script>
  import axios from 'axios';
  import Icon, {Document} from 'svelte-hero-icons';
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  // Components
  import Button from '../components/Button.svelte';
  import Modal from '../components/Modal.svelte';
  import Select from '../components/Select.svelte';

  // Required input vars
  export let variable: string;
  export let start: string;
  export let value = '' || start;
  export let title: string;

  // File vars
  let files: FileList;
  let uploadType = 'imgur';
  let fileInput: HTMLInputElement;
  let fileInputName: string;
  let fileUploadModal = false;
  let fileUploadProgress = 0;

  // Other vars
  let error: string;

  const url = () => {
    error = '';
    const check = value.split('.').pop();
    const allowed = ['jpg', 'jpeg', 'gif', 'png', 'apng'];
    if (!allowed.includes(check) && value.length > 0) {
      error = `URL must be a direct link (ending in .jpg, .jpeg, .png, ect..). Example: <a href="https://i.imgur.com/kYW2H5C.jpg" target="_blank">https://i.imgur.com/kYW2H5C.jpg</a>`;
    } else if (value.length > 0) {
      updatePreview(value);
    }
  }

  const file = async() => {
    const file = files[0];
    fileInputName = file.name;

    if (uploadType === 'imgur') {
      error = '';

      const formData = new FormData();
      formData.append('image', file);

      const {data} = await axios.post('https://api.imgur.com/3/image', formData, {
        headers: {
          Authorization: 'Client-ID 52c59e859f41ce2'
        },
        onUploadProgress(e) {
          fileUploadProgress = e.lengthComputable ? (e.loaded / e.total) * 100 : 0;
        }
      })
      await new Promise(f => setTimeout(f, 2000));

      let {link} = data.data;
      // let link = 'https://google.com';
      value = link;

      fileUploadModal = false;
      fileUploadProgress = 0;

      updatePreview(link);
    } else if (uploadType === 'b64') {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => {
        error = '';
        updatePreview(e.target.result);
      }
      fileUploadModal = false;
    }
  }

  const transparent = (option: string) => {
    if (option === 'transparent') updatePreview('transparent');
    else updatePreview(value || start);
  }

  // Update preview
  const updatePreview = (value: any) => dispatch('update', {variable, value});

  // Check if user inputs transparent, auto switch to transparent option
  $: if (value == 'transparent') {
    if (value == start) value = '';
  }

  // Dropdown stuff
  let selectedOption = 'url';
  const dropdownOptions = [
    {title: 'Internet url', value: 'url'},
    {title: 'Computer file', value: 'file'},
    {title: 'Transparent background', value: 'transparent'},
  ]

  const setOption = ({detail}) => {
    selectedOption = detail;
    error = '';
    transparent(detail);
  }
</script>

{#if title}
  <header class="mb-2">
    <p>{title}</p>
  </header>
{/if}
<div>
  <Select options={dropdownOptions} customValue={false} on:update={setOption} />
  {#if selectedOption === 'url'}
    <input class="input mt-2" type="text" placeholder="Image URL" class:error bind:value on:keyup={url}>
  {:else if selectedOption === 'file'}
    <div class="mt-2 flex items-center">
      <Button variant="primary" colour="emerald" on:click={() => fileUploadModal = true}>
        Browse
      </Button>
      <span class="ml-2">{fileInputName || 'No file selected'}</span>
    </div>
  {/if}
</div>

<Modal show={fileUploadModal} on:close={() => fileUploadModal = false}>
  <header class="p-4">
    <h2 class="font-display text-xl text-white">How should we upload?</h2>
  </header>
  <section class="px-4 pb-4">
    {#if fileUploadProgress === 0 || fileUploadProgress === 100}
    <div class="flex">
        <label class="flex flex-1 cursor-pointer justify-center items-center border-2 rounded p-4 mr-4 {uploadType === 'imgur' ? 'border-emerald-500' : 'border-gray-700'}">
          <input type="radio" bind:group={uploadType} value="imgur" class="mr-2 w-5 h-5 border-0 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-gray-800">
          Imgur.com
        </label>
        <label class="flex flex-1 cursor-pointer justify-center items-center border-2 rounded p-4 {uploadType === 'b64' ? 'border-emerald-500' : 'border-gray-700'}">
          <input type="radio" bind:group={uploadType} value="b64" class="mr-2 w-5 h-5 border-0 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-gray-800">
          Inline encode (base64)
        </label>
      </div>
      <div class="fileType-info">
        {#if uploadType === 'imgur'}
          <p class="my-4">Uploading to Imgur will make the theme less laggy but will mean your image will be public for everyone.</p>
        {:else if uploadType === 'b64'}
          <p class="my-4">Inline encoding with Base64 means your image will be private as it's encoded directly in your theme file, but will create more lag for big images.</p>
        {/if}
      </div>
    {/if}
    {#if uploadType === 'imgur' && fileUploadProgress > 0}
      <div class="relative my-4">
        <div class="flex items-center justify-between mb-1">
          <small class="text-xs text-gray-400">{fileUploadProgress != 100 ? 'Uploading...' : 'Upload complete'}</small>
          <small class="text-xs text-gray-400">{fileUploadProgress.toFixed(2)}%</small>
        </div>
        <div class="bg-gray-700 rounded-lg h-4 overflow-hidden">
          <div class="h-full bg-emerald-500 rounded-lg transition-all" style="width: {fileUploadProgress.toFixed(2)}%"></div>
        </div>
      </div>  
    {/if}
    {#if fileUploadProgress === 0 || fileUploadProgress === 100}
      <div class="flex text-sm items-center font-semibold transition rounded justify-center py-3 px-4 cursor-pointer bg-gray-700 text-gray-300 hover:bg-gray-600 focus:outline-none focus:bg-gray-500 focus:text-white" on:click={() => fileInput.click()}>
        <input type="file" bind:files on:change={file} bind:this={fileInput} class="hidden">
        <Icon src={Document} size="24" class="mr-2" />
        <span class="text-md text-white font-medium">{fileInputName || 'Select a file...'}</span>
      </div>
    {/if}
  </section>
</Modal>