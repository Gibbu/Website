<script context="module" lang="ts">
	import type {Load} from '@sveltejs/kit';

	export const load: Load = async({page}) => {
		return {
			status: 200,
			props: {
				slug: page.params.slug
			}
		}
	}
</script>

<script lang="ts">
	import data from './_themes';

	export let slug: string;

	const theme = data.find(el => el === slug);
</script>

<svelte:head>
	<title>Editor Moved</title>
	<meta property="og:title" content="Editor Moved">
	<meta name="description" content="The editor has been moved to: https://bdeditor.dev">
	<meta property="og:description" content="The editor has been moved to: https://bdeditor.dev">
</svelte:head>

<template>
	<div class="container">
		<h1>Editor has been moved.</h1>
		<p>You can find the newest and betterer editor over at <a href="https://bdeditor.dev/theme/{theme}" class="anchor" target="_blank" rel="noreferrer">https://bdeditor.dev/theme/{theme}</a></p>
	</div>
</template>

<style lang="scss">
	.container {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	h1 {
		color: var(--text-primary);
		font-size: rem(54);
	}
	p {
		font-size: rem(24);
		margin-top: rem(32);
	}
</style>