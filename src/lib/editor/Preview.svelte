<script>
  import {loaded, preview} from '$lib/stores';

  export let url: string;

  let iframe: any;

  const onLoad = () => {
    let getIframe = iframe.contentDocument.body.parentElement;

    $preview = getIframe;
    getIframe.querySelector('#import').textContent = `@import url("${url}")`;

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