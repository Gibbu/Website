<script>
	import Icon, {ArrowRight} from 'svelte-hero-icons';

	import themes from '$data/themes';

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
			<div class="ml-6 flex-1 flex justify-center items-start flex-col">
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
				<a href={getHref(theme.name)} class="mt-8 inline-flex items-center text-emerald-500 hover:underline hover:text-emerald-300">
					Customize theme <Icon src={ArrowRight} size="16" class="ml-2" />
				</a>
			</div>
		</div>
	{/each}
</main>