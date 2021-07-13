<script>
	import Icon, {QuestionMarkCircle, ExclamationCircle} from 'svelte-hero-icons';

	const icons = {
		QuestionMarkCircle,
		ExclamationCircle
	}

	export let message: string;
	export let type: 'hint'|'error';

	const classes = type == 'error' ? ['bg-red-500', 'border-red-500'] : ['bg-blue-500', 'border-blue-500'];

	let icon = type == 'hint' ? 'QuestionMarkCircle' : 'ExclamationCircle';
</script>

{#if message}
	<div class="flex items-stretch border-2 rounded mt-2 {classes[1]}">
		<div class="px-2 flex items-center {classes[0]}">
			<Icon src={icons[icon]} class="w-6 h-6 text-white" />
		</div>
		<div class="py-1 px-2">
			<p class="text-white">{@html message}</p>
		</div>
	</div>
{/if}