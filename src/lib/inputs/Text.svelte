<script>
  import {preview} from '../stores';
	import {createEventDispatcher} from 'svelte';
  const dispatch = createEventDispatcher();
  
  // Required input vars
  export let variable: string;
  export let value: string;
  export let title: string;

  // Optional input vars
  export let addon = false;
  export let hint: string;

  const update = () => {
    $preview.style.setProperty(`--${variable}`, value);
    dispatch('update', {variable, value: value, addon});
  }
</script>

<header class="option-header">
  <p class="option-title">{title}</p>
  {#if hint}
    <small class="option-hint">{hint}</small>
  {/if}
</header>
<div class="option-body">
  <input type="text" class="input" bind:value on:input={update}>
</div>