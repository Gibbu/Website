<script>
	import {page} from '$app/stores'
</script>

<template>
	<div class="container">
		{#if $page.path.includes('/editor')}
			<h1>Editor has been moved.</h1>
			<p>You can find the newest and betterer editor over at <a href="https://bdeditor.dev" class="anchor" target="_blank" rel="noreferrer">https://bdeditor.dev</a></p>
		{:else}
			<h1>404</h1>
			<p>Weird. That page doesn't seem to exist.</p>
		{/if}
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