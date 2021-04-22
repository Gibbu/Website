<script>
  import {preview} from '../stores';
  import Icon, {SwitchHorizontal} from 'svelte-hero-icons';
  import {createEventDispatcher} from 'svelte';
  import tooltip from '../directives/tooltip';
	const dispatch = createEventDispatcher();
  
  // Required input vars
  export let variable: string;
  export let value: number;
  export let unit = '';
  export let max: number;
  export let title: string;

  // Optional input vars
  export let step = 1;
  export let min = 0;
  export let addon = false;
  export let hint: string;

  let switchType = false;

  const update = () => {
    $preview.style.setProperty(`--${variable}`, value+unit)
    dispatch('update', {variable, addon, value, unit});
  }

  const change = () => switchType = !switchType;
</script>

{#if title}
  <header class="mb-2">
    <div class="flex items-center justify-between">
      <p class="flex items-center">
        {title}
        <small class="text-sm ml-2 text-gray-500">({value+unit})</small>
      </p>
      <button on:click={change} class="range-switch" use:tooltip={{content: 'Switch input', delay: [350, 0]}}>
        <Icon src={SwitchHorizontal} size="18" />
      </button>
    </div>
    {#if hint}
      <small class="text-sm text-gray-400">{hint}</small>
    {/if}
  </header>
{/if}
<div class="option-body">
  {#if !switchType}
    <input type="range" class="slider" {min} {max} {step} bind:value on:input={update}>
  {:else}
    <input type="number" class="input" {min} {max} {step} bind:value on:input={update}>
  {/if}
</div>