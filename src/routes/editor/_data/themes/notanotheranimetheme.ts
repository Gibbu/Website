import type {ITheme} from '$lib/interfaces/theme';
import Puckzxz from '../devs/puckzxz';

const theme: ITheme = {
	name: 'NotAnotherAnimeTheme',
	preview: 'https://puckzxz.github.io/NotAnotherAnimeTheme/NotAnotherAnimeThemeSCSL.theme.css',
	image: 'https://raw.githubusercontent.com/puckzxz/NotAnotherAnimeTheme/master/image/header.jpg',
	developers: [Puckzxz],
	features: ['background', 'addons', 'homebtn', 'font'],
	meta: {
		name: 'NotAnotherAnimeTheme',
		author: 'puckzxz#2080',
		version: '2.2',
		description: 'An easily customizable and automatically updating theme',
		invite: 'FdZhbjY',
		source: 'https://github.com/puckzxz/NotAnotherAnimeTheme'
	},
	imports: ['https://puckzxz.github.io/NotAnotherAnimeTheme/css/scsl.css'],
	fonts: [],
	variables: [
		{
			title: 'Background Image',
			icon: 'Photograph',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'background-image',
						start: 'https://i.imgur.com/kYW2H5C.jpg',
						value: '',
						title: 'Background Image'
					}
				}
			]
		},
		{
			title: 'Home button image',
			icon: 'Home',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'friends-icon',
						start: 'https://i.imgur.com/kYW2H5C.jpg',
						value: '',
						title: 'Home button image'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'friends-icon-zoom',
						value: 100,
						unit: '%',
						max: 200,
						step: 1,
						title: 'Zoom'
					}
				},
				{
					type: 'options',
					details: {
						variable: 'friends-icon-position',
						value: 'center',
						options: [
							{title: 'Top left', value: 'top left'},
							{title: 'Top centre', value: 'top center'},
							{title: 'Top right', value: 'top right'},
							{title: 'Centre left', value: 'center left'},
							{title: 'Centre', value: 'center'},
							{title: 'Centre right', value: 'center right'},
							{title: 'Bottom left', value: 'Bottom left'},
							{title: 'Bottom centre', value: 'Bottom center'},
							{title: 'Bottom right', value: 'bottom right'}
						],
						title: 'Image position'
					}
				}
			]
		},
		{
			title: 'Colours',
			icon: 'ColorSwatch',
			inputs: [
				{
					type: 'colour',
					details: {
						variable: 'main-color',
						value: 'rgb(67,181,129)',
						rule: true,
						type: 'RGB',
						title: 'Main'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'main-transparency',
						value: 'rgba(0, 0, 0, 0.8)',
						alpha: true,
						rule: true,
						type: 'RGB',
						title: 'Main transparency'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'hover-list-bg-color',
						value: 'rgba(0,0,0,0.15)',
						alpha: true,
						rule: true,
						type: 'RGB',
						title: 'Friends and members list background'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'border-lines-color',
						value: 'rgba(0,0,0,0.1)',
						alpha: true,
						rule: true,
						type: 'RGB',
						title: 'Message divider'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'scroll-bar-color',
						value: 'rgba(255,255,255,.15)',
						alpha: true,
						rule: true,
						type: 'RGB',
						title: 'Scrollbar'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'selected-text-voice-color',
						value: '#f6f6f7',
						type: 'HEX',
						title: 'Selected channel'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'channel-hover-text-color',
						value: 'rgba(255, 255, 255, 0.75)',
						alpha: true,
						rule: true,
						type: 'RGB',
						title: 'Hovered channel'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'unread-text-color',
						value: '67,181,129',
						alpha: true,
						rule: true,
						type: 'RGB',
						title: 'Unread text'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'user-popup-background',
						value: 'rgba(0,0,0,0.8)',
						alpha: true,
						rule: true,
						type: 'RGB',
						title: 'User popup background'
					}
				},
			]
		},
		{
			title: 'Others',
			icon: 'Cog',
			inputs: [
				{
					type: 'number',
					details: {
						variable: 'font-size',
						value: 16,
						unit: 'px',
						title: 'Chat font size'
					}
				},
				{
					type: 'text',
					details: {
						variable: 'unread-server-animation',
						value: 'rainbow',
						title: 'Unread server animation',
						hint: 'Replace it with "none" in order to remove any animations and use the main color instead'
					}
				}
			]
		}
	],
	addons: ['rs', 'columns', 'hsl']
}

export default theme;