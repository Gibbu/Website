import type {ITheme} from '$lib/interfaces/theme';
import Gibbu from '../devs/gibbu';

const theme: ITheme = {
	name: 'MinimalCord',
	preview: 'https://discordstyles.github.io/MinimalCord/MinimalCord.theme.css',
	image: 'https://camo.githubusercontent.com/e9a46ff5510743194cef44df2f4ba72978d690f327d0eb039cef092833b99f7a/68747470733a2f2f692e696d6775722e636f6d2f57333364674d4a2e706e67',
	developers: [Gibbu],
	features: ['addons', 'font'],
	meta: {
		name: 'MinimalCord',
		author: 'Gibbu#1211',
		version: '2.0.0',
		description: 'Changes Discord enough to give it a fresh feel while also making it darker. Supports both Light and Dark themes',
		invite: 'ZHthyCw',
		authorId: 174868361040232448,
		donate: 'https://paypal.me/IanRGibson',
		website: 'https://github.com/Gibbu/BetterDiscord-Themes/tree/master/MinimalCord',
		source: 'https://github.com/monstrousdev/themes/theme-files/Reborn.theme.css'
	},
	imports: [
		'https://discordstyles.github.io/MinimalCord/base.css'
	],
	fonts: [],
	variables: [
		{
			title: 'Colours',
			icon: 'ColorSwatch',
			inputs: [
				{
					type: 'colour',
					details: {
						variable: 'accent',
						value: '50,131,207',
						type: 'RGB',
						title: 'Accent colour'
					}
				}
			]
		},
		{
			title: 'Chat messages',
			icon: 'Chat',
			inputs: [
				{
					type: 'slider',
					details: {
						variable: 'message-padding',
						value: 10,
						unit: 'px',
						max: 35,
						title: 'Message padding'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'message-spacing',
						value: 10,
						unit: 'px',
						max: 35,
						title: 'Message spacing'
					}
				}
			]
		}
	],
	addons: ['hsl', 'columns', 'radialstatus']
}

export default theme;