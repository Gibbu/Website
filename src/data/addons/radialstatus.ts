import type {IAddon} from '$interfaces/addon';
import Gibbu from '$data/devs/gibbu';

const addon: IAddon = {
	name: 'RadialStatus',
	description: 'Changes the status icons to wrap around the avatar.',
	developer: Gibbu,
	imports: ['https://discordstyles.github.io/RadialStatus/dist/RadialStatus.css'],
	preview: ['https://discordstyles.github.io/RadialStatus/dist/RadialStatus.theme.css'],
	group: 'avatar',
	selector: 'rs',
	use: false,
	variables: [
		{
			type: 'slider',
			details: {
				variable: 'rs-small-spacing',
				value: 2,
				unit: 'px',
				max: 10,
				step: 1,
				title: 'Small avatar spacing',
				hint: 'Chat, members, dms',
				addon: true
			}
		},
		{
			type: 'slider',
			details: {
				variable: 'rs-medium-spacing',
				value: 2,
				unit: 'px',
				max: 10,
				step: 1,
				title: 'Medium avatar spacing',
				hint: 'User popout',
				addon: true
			}
		},
		{
			type: 'slider',
			details: {
				variable: 'rs-large-spacing',
				value: 2,
				unit: 'px',
				max: 10,
				step: 1,
				title: 'Large avatar spacing',
				hint: 'User profiles',
				addon: true
			}
		},
		{
			type: 'slider',
			details: {
				variable: 'rs-small-width',
				value: 2,
				unit: 'px',
				max: 5,
				step: .5,
				title: 'Small width',
				hint: 'Thickness of the status border for members list/dms',
				addon: true
			}
		},
		{
			type: 'slider',
			details: {
				variable: 'rs-medium-width',
				value: 2,
				unit: 'px',
				max: 5,
				step: .5,
				title: 'Medium width',
				hint: 'Thickness of the status border for User popout',
				addon: true
			}
		},
		{
			type: 'slider',
			details: {
				variable: 'rs-large-width',
				value: 2,
				unit: 'px',
				max: 5,
				step: .5,
				title: 'Large width',
				hint: 'Thickness of the status border for User profile',
				addon: true
			}
		},
		{
			type: 'slider',
			details: {
				variable: 'rs-avatar-shape',
				value: 50,
				unit: '%',
				max: 50,
				step: .5,
				title: 'Avatar shape',
				hint: '0% = Square | 50% = Circle',
				addon: true
			}
		},
		{
			type: 'colour',
			details: {
				variable: 'rs-online-color',
				value: '#43b581',
				type: 'HEX',
				title: 'Online status colour',
				addon: true
			}
		},
		{
			type: 'colour',
			details: {
				variable: 'rs-idle-color',
				value: '#faa61a',
				type: 'HEX',
				title: 'Idle status colour',
				addon: true
			}
		},
		{
			type: 'colour',
			details: {
				variable: 'rs-dnd-color',
				value: '#f04747',
				type: 'HEX',
				title: 'Do not disturb status colour',
				addon: true
			}
		},
		{
			type: 'colour',
			details: {
				variable: 'rs-offline-color',
				value: '#636b75',
				type: 'HEX',
				title: 'Offline status colour',
				addon: true
			}
		},
		{
			type: 'colour',
			details: {
				variable: 'rs-streaming-color',
				value: '#643da7',
				type: 'HEX',
				title: 'Streaming status colour',
				addon: true
			}
		},
	],
	hiddenVars: [
		{
			variable: 'rs-invisible-color',
			value: '#747f8d'
		},
		{
			variable: 'rs-phone-visible',
			value: 'block'
		}
	]
}

export default addon;