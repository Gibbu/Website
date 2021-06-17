<script>
	import {THEME, preview} from '$lib/stores';

	// Components
	import Colour from '../inputs/Colour.svelte';
	import Font from '../inputs/Font.svelte';
	import Image from '../inputs/Image.svelte';
	import NumberField from '../inputs/Number.svelte';
	import Options from '../inputs/Options.svelte';
	import Slider from '../inputs/Slider.svelte';
	import Text from '../inputs/Text.svelte';

	const inputs = {
		colour: Colour,
		font: Font,
		image: Image,
		number: NumberField,
		options: Options,
		slider: Slider,
		text: Text,
	}

	export let data;

	const update = ({detail}) => {
		let output = detail.value;
		if (typeof detail.value === 'string' && (detail.value.includes('http') || detail.value.includes('base64'))) {
			output = `url(${detail.value})`;
		}
		$preview.style.setProperty(`--${detail.variable}`, output+(detail.unit || ''));

		const target = detail.addon ? $THEME.addons : $THEME.variables;

		target.forEach(group => {
			const inputs = detail.addon ? group.variables : group.inputs;
			inputs.forEach(input => {
				if (input.details.variable == detail.variable) {
					input.details.value = detail.value;
				}
			})
		})
	}
</script>

<svelte:component this={inputs[data.type]} {...data.details} on:update={update} />