<script lang="ts">
	import Meta from '$lib/Meta.svelte';

	const posts = [
		{
			title: 'Setup a Linux Valheim Dedicated server',
			description:
				'A guide on how to setup a Valheim Dedicated server on a Linux system, using SteamCMD.',
			date: '10th January, 2026',
			slug: 'external-linux-valheim-server'
		}
	];
</script>

<Meta title="Blog" description="Just some jibber jabber that I want to talk about" />

<main class="wrap">
	<h1>Just some jibber jabber</h1>

	<ul>
		{#each posts as { title, description, date, slug }}
			<li>
				<a href="/blog/{slug}">
					<h3>{title}</h3>
					<p>{description}</p>
					<small>{date}</small>
				</a>
			</li>
		{/each}
	</ul>
</main>

<style>
	h1 {
		font-size: 42px;
		font-family: var(--font-manrope);
		color: var(--text-lighter);
		padding: 80px 0;
		font-weight: 800;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		margin: 0 -24px;
	}

	a {
		padding: 16px 24px;
		border-radius: 6px;
		display: block;
		&:hover {
			background: var(--background);
		}
	}

	h3 {
		font-size: 24px;
		font-family: var(--font-manrope);
		font-weight: 700;
	}
	p {
		margin-top: 15px;
	}
</style>
