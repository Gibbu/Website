<script>
  import {createEventDispatcher} from 'svelte';
  import {THEME} from '$lib/stores';

  import Modal from './Modal.svelte';
  import Button from './Button.svelte';

  const dispatch = createEventDispatcher();

  export let show = false;

  let checked: boolean;

  const close = () => {
    dispatch('closed');
    if (checked) localStorage.setItem(`${$THEME.name}-donate`, 'true');
  }
</script>

<Modal {show} on:close={close}>
  <header class="p-4">
    <h2 class="font-display text-xl text-white">Like {$THEME.name}?</h2>
  </header>
  <section class="px-4 pb-4">
    <p class="mb-2">Consider donating to the developer{$THEME.developers.length > 1 ? 's' : ''}</p>
    {#each $THEME.developers as dev}
      {#if dev.paypal}
        <a href={dev.paypal} target="_blank" class="flex items-center bg-gray-700 rounded-full mb-2 last:mb-0">
          <img src="https://github.com/{dev.github}.png" alt="Profile avatar" class="h-12 w-12 mr-2 rounded-full">
          <span class="developer-name">{dev.name}</span>
        </a>
      {/if}
    {/each}
  </section>
  <footer class="p-4 flex justify-between items-center bg-gray-900">
    <label class="cursor-pointer flex items-center">
      <input type="checkbox" class="text-emerald-500 w-5 h-5 border-0 cursor-pointer rounded-sm focus:ring-emerald-500 focus:ring-offset-gray-800" bind:checked>
      <span class="ml-2 select-none">Don't show again</span>
    </label>
    <Button variant="text" colour="green" on:click={close}>Close</Button>
  </footer>
</Modal>