<script>
  import Icon, {Selector} from 'svelte-hero-icons';
  import clickOutside from '../directives/clickOutside';
  import {createEventDispatcher} from 'svelte';
  const dispatch = createEventDispatcher();

  // Interfaces
  interface IOption {
    title: string,
    value: string
  }

  // Props
  export let options: IOption[];
  export let value: string;
  export let customValue = true;

  // Values
  $: selected = options.find(el => el.value === value) || options[0];
  let custom: string;

  // Dropdown
  let trigger: HTMLButtonElement;
  let visible = false;

  const toggle = () => visible = !visible;
  const hide = () => visible = false;

  const set = (options: IOption) => {
    if (options.value !== 'custom') update(options.value);
    selected = options;
    hide();
  }

  const update = (value: string) => {
    dispatch('update', value);
  }
</script>

<div class="relative">
  <button
    class="flex w-full text-sm items-center font-semibold transition rounded justify-between py-3 px-4 cursor-pointer focus:outline-none bg-gray-700 text-gray-300 hover:bg-gray-600 focus:bg-gray-500 focus:text-white"
    bind:this={trigger}
    on:click={toggle}
  >
    {selected.title}
    <Icon src={Selector} class="w-5 h-5" />
  </button>
  {#if visible}
    <div
      class="border-emerald-500 bg-gray-900 transform translate-y-2 absolute z-10 top-full border-2 rounded p-2"
      use:clickOutside={trigger}
      on:clickedOutside={hide}
    >
      {#each options as option}
        <button class="menu-btn" class:menu-btn-active={selected.value === option.value} on:click={() => set(option)}>
          {option.title}
        </button>
      {/each}
      {#if customValue}
        <button class="menu-btn" class:menu-btn-active={selected.value === 'custom'} on:click={() => set({title: 'Custom value', value: 'custom'})}>
          Custom value
        </button>
      {/if}
    </div>
  {/if}
</div>
{#if selected.value === 'custom'}
  <input type="text" class="input mt-2" placeholder="Custom value" bind:value={custom} on:input={() => update(custom)}>
{/if}