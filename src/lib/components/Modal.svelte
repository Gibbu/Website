<script>
	import {fade, fly} from 'svelte/transition';
	import {onMount, createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

	let Portal;
	onMount(async() => {
		const portalModule = await import('svelte-portal');
		Portal = portalModule.default;
	})

	export let show = false;
	export let backdrop = true;
	export let clazz = '';

	const close = () => {
		if (backdrop) {
			dispatch('close');
		}
	}
</script>

{#if show}
	<svelte:component this={Portal} target="#portal">
		<div class="bg-black bg-opacity-80 fixed inset-0 z-10" on:click={close} transition:fade={{duration: 200}}></div>
		<div class="fixed left-1/2 top-12 transform -translate-x-1/2 z-20 bg-gray-800 rounded overflow-hidden w-[550px] max-w-[550px] {clazz}" in:fly={{y: 25, duration: 250}} out:fly={{y: -25, duration: 250}}>
			<slot />
		</div>
	</svelte:component>
{/if}