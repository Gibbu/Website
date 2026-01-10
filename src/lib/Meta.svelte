<script lang="ts">
	import { page } from '$app/state';

	interface Props {
		title?: string;
		description?: string;
		keywords?: string;
	}

	let { title, description, keywords }: Props = $props();

	const config = {
		name: 'Gibbu',
		description: 'My personal site.',
		url: 'https://gibbu.dev',
		author: 'Gibbu',
		keywords: 'Personal,Blog,Site'
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description ?? config.description} />
	<meta name="keywords" content={keywords ? `${keywords},${config.keywords}` : config.keywords} />
	<meta name="author" content={config.author} />
	<meta name="twitter:site" content={config.url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description ?? config.description} />
	<meta name="twitter:creator" content={config.author} />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={config.url + page.url.pathname} />
	<meta property="og:description" content={description ?? config.description} />
	<meta property="og:site_name" content={config.name} />
</svelte:head>
