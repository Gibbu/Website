<script>
  import {createEventDispatcher} from 'svelte';
  import {THEME} from '$lib/stores';

  import Modal from './Modal.svelte';

  const dispatch = createEventDispatcher();

  export let show = false;

  let checked: boolean;

  const close = () => {
    dispatch('closed');
    if (checked) localStorage.setItem(`${$THEME.name}-donate`, 'true');
  }
</script>

<Modal {show} on:close={close}>
  <header class="modal-header">
    <h2 class="modal-title">Like {$THEME.name}?</h2>
  </header>
  <section class="modal-body">
    <p>Consider donating to the developer{$THEME.developers.length > 1 ? 's' : ''}</p>
    {#each $THEME.developers as dev}
      {#if dev.paypal}
        <a href={dev.paypal} class="developer" target="_blank">
          <img src="https://github.com/{dev.github}.png" alt="Profile avatar" class="developer-avatar">
          <span class="developer-name">{dev.name}</span>
        </a>
      {/if}
    {/each}
  </section>
  <footer class="modal-footer split">
    <label class="checkbox">
      <input type="checkbox" class="checkbox-input" bind:checked>
      <div class="checkbox-box"></div>
      <span class="checkbox-text">Don't show again</span>
    </label>
    <button class="btn text green" on:click={close}>Close</button>
  </footer>
</Modal>