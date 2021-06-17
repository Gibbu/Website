<script>
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	// Components
	import Message from '../components/Message.svelte';
	
	// Required input vars
	export let variable: string;
	export let value: string;
	export let title: string;

	// Optional input vars
	export let unit = '';
	export let min = 0;
	export let addon = false;
	export let hint: string = '';

	let error: string;

	const update = () => {
		if (!/^\d+$/.test(value)) {
			error = 'This input field can only contain numbers.';
		} else {
			error = '';
			dispatch('update', {variable, value, addon, unit});
		}
	}
</script>

<header class="mb-2">
	<p class="flex items-center">
		{title}
		<small class="text-sm ml-2 text-gray-500">({value+unit})</small>
	</p>
	
	{#if hint}
		<small class="text-sm text-gray-400">{hint}</small>
	{/if}
</header>
<div>
	<input type="number" {min} class="input" bind:value on:input={update} class:error>
	<Message type="error" message={error} />
</div>