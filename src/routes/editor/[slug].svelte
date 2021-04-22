<script>
  import Icon, {Adjustments, ChevronRight, ChevronLeft, Photograph, Sun, ColorSwatch, MenuAlt1, Puzzle, Globe, Home, User, Server, Cog, Chat} from 'svelte-hero-icons';
  import {page} from '$app/stores';
  import {THEME, preview} from '$lib/stores';

  // types
  import type {IAddon} from '$lib/interfaces/addon';
  import type {ITheme} from '$lib/interfaces/theme';

  // Params
  const {slug} = $page.params;

  // Icons
  const icons = {Photograph, Sun, ColorSwatch, MenuAlt1, Puzzle, Globe, Home, User, Server, Cog, Chat}

  // Data
  import addonsData from './_data/addons';
  import themesData from './_data/themes';

  // Components
  import Preview from '$lib/editor/Preview.svelte';
  import Actions from '$lib/editor/Actions.svelte';
  import Button from '$lib/components/Button.svelte';
  import Component from '$lib/editor/Component.svelte';
  import Addons from '$lib/editor/Addons.svelte';
  import Loader from '$lib/editor/Loader.svelte';

  const themes: ITheme[] = JSON.parse(JSON.stringify(themesData));
  const addon: IAddon[] = JSON.parse(JSON.stringify(addonsData));

  const setTheme = themes.find(theme => theme.name.toLowerCase().replace(/ /g, '') == slug);
  const setAddons = (setTheme.addons ? addon.filter(addon => setTheme.addons.includes(addon.selector)) : []);

  // Construct theme object
  $THEME = {
    name: setTheme.name,
    meta: setTheme.meta,
    developers: setTheme.developers,
    imports: setTheme.imports,
    fonts: setTheme.fonts,
    variables: setTheme.variables,
    addons: setAddons
  }

  // Show panel
  let activeSetting: null|number = null;
  function setSetting(i: number|null, modal = false) {
    activeSetting = i;

    if (modal) {
			$preview.querySelector('#modal').style.display = 'block';
			$preview.querySelector('#userpopout').style.display = 'none';
		} else {
			$preview.querySelector('#modal').style.display = 'none';
			$preview.querySelector('#userpopout').style.display = 'block';
		}
  }
</script>

<svelte:head>
	<title>{setTheme.name} - Theme Editor</title>
	<meta property="og:title" content="{setTheme.name} - Theme Editor">
	<meta name="description" content="Customize {setTheme.name} with a easy to use interface">
	<meta property="og:image" content={setTheme.image}>
	<meta property="og:description" content="Customize {setTheme.name} with a easy to use interface">
</svelte:head>

<div class="h-screen w-screen overflow-hidden flex relative z-10">
  <aside class="bg-gray-800 w-[400px] min-w-[400px] h-full flex flex-col">
    <Actions />
    <div class="scroller-container">
      <div class="scroller absolute transform transition {activeSetting !== null ? 'translate-x-4 opacity-0 pointer-events-none' : ''}">
        {#each $THEME.variables as setting, i}
          <Button variant="secondary" class="w-full text-left justify-start mb-4" on:click={() => setSetting(i, setting.modal)}>
            <Icon src={icons[setting.icon]} class="w-5 h-5 mr-4" />
            <span class="flex-1">{setting.title}</span>
            <Icon src={ChevronRight} class="w-5 h-5" />
          </Button>
        {/each}
        {#if $THEME.addons.length > 0}
          <Button variant="secondary" class="w-full text-left justify-start mb-4" on:click={() => setSetting(100)}>
            <Icon src={Adjustments} class="w-5 h-5 mr-4" />
            <span class="flex-1">Addons</span>
            <Icon src={ChevronRight} class="w-5 h-5" />
          </Button>
        {/if}
      </div>
      {#each $THEME.variables as settings, i}
        <div class="scroller absolute transform transition {activeSetting === i ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0 pointer-events-none'}">
          <Button variant="secondary" class="w-full text-left justify-start mb-4" on:click={() => setSetting(null)}>
            <Icon src={ChevronLeft} class="w-5 h-5 mr-4" />
            <span>Back</span>
          </Button>
          {#each settings.inputs as input}
            <div class="mb-4 last:mb-0">
              <Component data={input} />
            </div>
          {/each}
        </div>
      {/each}
      {#if $THEME.addons}
        <div class="scroller absolute transform transition {activeSetting === 100 ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0 pointer-events-none'}">
          <Button variant="secondary" class="w-full text-left justify-start mb-4" on:click={() => setSetting(null)}>
            <Icon src={ChevronLeft} class="w-5 h-5 mr-4" />
            <span>Back</span>
          </Button>
          <Addons />
        </div>
      {/if}
    </div>
  </aside>
  <Preview url={setTheme.preview} developers={setTheme.developers} />
</div>

<Loader />