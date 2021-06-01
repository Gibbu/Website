<script>
  import {tick} from 'svelte';
	import {createEventDispatcher, onMount, onDestroy} from 'svelte';
  import '@simonwep/pickr/dist/themes/monolith.min.css';

  // Required input vars
  export let variable: string;
  export let value: any;
  export let type: 'HEX'|'RGB';
  export let title: string;

  // Optional input vars
  export let addon = false;
  export let rule = false;
  export let alpha = false;
  export let hint: string = '';

  // Pickr stuff
  let PickrModule;
  let pickr;
  let pickrEl;

  // Other vars
  const dispatch = createEventDispatcher();
  let isMounted = false;
  
  // Is used to remount when value is changed.
  $: render(value);

  onMount(async() => {
    PickrModule = await import('@simonwep/pickr');
    isMounted = true;

    render(value);
  });
  onDestroy(() => {
    if (isMounted) pickr.destroyAndRemove();
  });

  const render = async(value: string) => {
    await tick();

    let starter = value;
    if (value.includes('%')) {
      starter = `hsl(${value})`;
    } else if (!value.includes('#') && !value.includes('rgb') && value !== 'transparent') {
      starter = `rgb(${value})`;
    }

    if (isMounted) {
      pickr = PickrModule.create({
        el: pickrEl,
        container: '#pickrs',
        theme: 'monolith',
        default: starter,
        position: 'right-start',
        swatches: [
          'rgb(244, 67, 54)',
          'rgb(233, 30, 99)',
          'rgb(156, 39, 176)',
          'rgb(103, 58, 183)',
          'rgb(63, 81, 181)',
          'rgb(33, 150, 243)',
          'rgb(3, 169, 244)',
          'rgb(0, 188, 212)',
          'rgb(0, 150, 136)',
          'rgb(76, 175, 80)',
          'rgb(139, 195, 74)',
          'rgb(205, 220, 57)',
          'rgb(255, 235, 59)',
          'rgb(255, 193, 7)'
        ],
        components: {
          opacity: alpha,
          preview: true,
          hue: true,
          interaction: {
            save: true,
            input: true
          }
        }
      }).on('change', colour => {
        let output: string;
        if (type == 'HEX') {
          output = colour.toHEXA().toString();
        } else if (type == 'RGB') {
          const c = colour.toRGBA();
          output = `${(rule ? `rgb(`: '')}${rd(c[0])},${rd(c[1])},${rd(c[2])}${alpha ? `,${c[3]}` : ''}${(rule ? ')': '')}`;
        }

        dispatch('update', {variable, addon, value: output});
      })
    }
  }

  const rd = (value) => Math.round(value);
</script>

{#key value}
  <div class="mb-3 last:mb-0 flex items-center">
    <div bind:this={pickrEl}></div>
    <div class="ml-2">
      <p>{title}</p>
      {#if hint}
        <small class="block -mt-1 text-sm text-gray-400">{hint}</small>
      {/if}
    </div>
  </div>
{/key}