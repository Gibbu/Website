<script lang="ts">
	import Meta from '$lib/Meta.svelte';

	let { children, title, date, description, keywords } = $props();
</script>

<Meta {title} {description} {keywords} />

<main>
	<header>
		<h1>{title}</h1>
		<p>{description}</p>
		<small>{date}</small>
	</header>
	<article>
		{@render children()}
	</article>
</main>

<style>
	main {
		max-width: 840px;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		padding: 100px 24px;
	}

	header {
		padding-bottom: 100px;
	}

	h1 {
		font-size: 56px;
		font-family: var(--font-manrope);
		font-weight: 800;
		color: var(--text-lighter);
	}

	p {
		margin: 15px 0 5px;
		font-size: 18px;
	}
</style>
