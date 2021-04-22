<script>
  import {fade, fly} from 'svelte/transition';

  import {loaded} from '$lib/stores';
</script>

{#if !$loaded}
  <div out:fade={{duration: 300, delay: 600}} class="bg-gray-900 fixed inset-0 flex items-center justify-center flex-col z-50">
    <h1 out:fly={{y: -15, duration: 300, delay: 300}} class="font-display text-md text-white">Editor is loading</h1>
    <p out:fly={{y: -15, duration: 300, delay: 300}} class="mt-2 animate-pulse">Please wait...</p>
  </div>
{/if}