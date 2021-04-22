<script>
  import {THEME, preview} from '$lib/stores';

  import Component from './Component.svelte';
  
  let states = {
    hsl: false,
    columns: false,
    rs: false
  }

  const toggle = e => {
    document.querySelectorAll(`[name="${e.target.name}"]`).forEach((checkbox: HTMLInputElement) => {
      const obj = $THEME.addons.find(obj => obj.selector == checkbox.value);
      if (e.target.value != checkbox.value) {
        checkbox.checked = false;
        states[checkbox.value] = false;
      }
      if (e.target.value == checkbox.value && checkbox.checked == true) {
        add(obj);
        states[checkbox.value] = true;
      } else {
        remove(obj);
        states[checkbox.value] = false;
      }
    })
  }

  const add = (addon) => {
    $THEME.addons.forEach(obj => {
      if (obj.selector == addon.selector) obj.use = true;
    })

    addon.preview.forEach(url => {
      if (!$preview.querySelector(`.${addon.selector}`)) {
        let styleTag = document.createElement('style');
        styleTag.setAttribute('class', addon.selector);
        styleTag.textContent = `@import url('${url}')`;
        $preview.querySelector('head').appendChild(styleTag);
      }
    })
  }
  const remove =(addon) => {
    if ($preview.querySelector(`.${addon.selector}`)) {
      $preview.querySelectorAll(`.${addon.selector}`).forEach(el => el.remove());
    }
    
    $THEME.addons.forEach(obj => {
      if (obj.selector == addon.selector) obj.use = false;
    })
  }
</script>

{#each $THEME.addons as addon}
  <div class="mb-4 pb-4 border-b border-gray-700 last:border-0 last:pb-0">
    <header class="mb-2">
      <label class="flex items-center cursor-pointer">
        <input type="checkbox" class="text-emerald-500 w-5 h-5 border-0 cursor-pointer rounded-sm focus:ring-emerald-500 focus:ring-offset-gray-800" name={addon.group} value={addon.selector} on:change={toggle}>
        <span class="ml-2 select-none">{addon.name} by {addon.developer.name}
      </label>
      <small class="text-gray-400">{addon.description}</small>
    </header>
    <div class="{states[addon.selector] ? 'block' : 'hidden'}">
      {#each addon.variables as input}
        <div class="mb-4 last:mb-0">
          <Component data={input} />
        </div>
      {/each}
    </div>
  </div>
{/each}