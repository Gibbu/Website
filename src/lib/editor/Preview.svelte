<script>
  import {loaded, preview, THEME} from '$lib/stores';

  import type {IDev} from '$lib/interfaces/dev';


  export let developers: IDev[];
  export let url: string;

  let iframe: any;

  const onLoad = () => {
    let getIframe = iframe.contentDocument.body.parentElement;

    $preview = getIframe;
    getIframe.querySelector('#import').textContent = `@import url("${url}")`;
    iframe.contentWindow.update(developers[0])

    $loaded = true;
  }
</script>

<iframe 
  bind:this={iframe}
  on:load={onLoad}
  src="/preview/index.html"
  title="preview"
  frameborder="0"
  class="w-full m-4"
/>