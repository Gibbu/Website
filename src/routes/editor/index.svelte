<script>
  import Icon, {ArrowRight} from 'svelte-hero-icons';
  import {onMount} from 'svelte';
  import {loaded} from '$lib/stores';

  import themes from './_data/themes';

  onMount(() => $loaded = false);

  const getFeature = (type: string) => {
    if (type === 'background') return {classes: 'bg-green-500 border-green-500', value: 'Background image'};
    if (type === 'addons') return {classes: 'bg-yellow-500 border-yellow-500', value: 'Addons'};
    if (type === 'homebtn') return {classes: 'bg-blue-500 border-blue-500', value: 'Home button'};
    if (type === 'font') return {classes: 'bg-red-500 border-red-500', value: 'Custom font'};
  }
  const getHref = (href: string) => `/editor/${href.replace(/ /g, '').toLowerCase()}`;
</script>

<svelte:head>
	<title>Home - Theme Editor</title>
	<meta property="og:title" content="Home - Theme Editor">
	<meta name="description" content="Customize themes by the community with a easy to use interface">
	<meta property="og:description" content="Customize themes by the community with a easy to use interface">
</svelte:head>

<main class="max-w-screen-xl mx-auto w-full">
  <header class="my-16 flex justify-between">
    <h1 class="font-display text-white text-4xl">Select a theme to customize</h1>
  </header>
  {#each themes as theme}
    <div class="flex mb-6 pb-6 border-b border-gray-800 last:border-none">
      <a href={getHref(theme.name)} class="w-96 rounded overflow-hidden transform transition hover:-translate-y-2 hover:shadow-xl">
        <img src={theme.image} alt="Theme preview">
      </a>
      <div class="ml-6 flex-1">
        <h2 class="text-white font-display text-xl">
          <a href={getHref(theme.name)} class="hover:underline hover:text-emerald-500">{theme.name}</a>
        </h2>
        <p class="text-sm text-gray-400 mb-4">
          by
          {#each theme.developers as dev}
            <a href="https://github.com/{dev.github}" target="_blank" class="underline">{dev.name}</a>
          {/each}
        </p>
        <p>{theme.meta.description}</p>
        {#if theme.features.length > 0}
          <div class="flex items-center text-sm mt-2">
            <span class="text-gray-400">Features:</span>
            {#each theme.features as feature}
              <span class="{getFeature(feature).classes} flex items-center select-none text-xs ml-2 text-white border border-opacity-40 py-1 px-1.5 rounded bg-opacity-20">
                {getFeature(feature).value}
              </span>
            {/each}
          </div>
        {/if}
        <a href={getHref(theme.name)} class="mt-8 inline-flex items-center text-emerald-500 hover:underline hover:text-emerald-300">
          Customize theme <Icon src={ArrowRight} size="16" class="ml-2" />
        </a>
      </div>
    </div>
  {/each}
</main>