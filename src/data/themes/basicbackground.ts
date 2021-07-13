import type {ITheme} from '$interfaces/theme';
import DevilBro from '$data/devs/devilbro';

const theme: ITheme = {
	name: 'BasicBackground',
	preview: 'https://mwittrien.github.io/BetterDiscordAddons/Themes/BasicBackground/BasicBackground.theme.css',
	image: 'https://i.imgur.com/XORsntg.jpg',
	developers: [DevilBro],
	meta: {
		name: 'BasicBackground',
		author: 'DevilBro',
		version: '1.0.5',
		description: 'Allows you to use a background image without greatly altering the basic look of Discord',
		source: 'https://raw.githubusercontent.com/mwittrien/BetterDiscordAddons/master/Themes/BasicBackground/BasicBackground.theme.css',
		invite: 'Jx3TjNS',
		donate: 'https://www.paypal.me/MircoWittrien',
		patreon: 'https://www.patreon.com/MircoWittrien',
		website: 'https://github.com/mwittrien/BetterDiscordAddons/tree/master/Themes/BasicBackground',
		authorId: '278543574059057154',
		updateUrl: 'https://raw.githubusercontent.com/mwittrien/BetterDiscordAddons/master/Themes/BasicBackground/BasicBackground.theme.css'
	},
	imports: ['https://mwittrien.github.io/BetterDiscordAddons/Themes/BasicBackground/BasicBackground.css'],
	fonts: [],
	variables: [
		{
			title: 'Background Image',
			icon: 'Photograph',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'background',
						start: 'https://mwittrien.github.io/BetterDiscordAddons/Themes/BasicBackground/_res/background.jpg',
						value: '',
						title: 'Background Image'
					}
				},
				{
					type: 'options',
					details: {
						variable: 'backgroundsize',
						value: 'cover',
						options: [
							{title: 'Cover', value: 'cover'},
							{title: 'Contain', value: 'contain'},
							{title: 'Auto', value: 'auto'},
							{title: '100%', value: '100%'},
							{title: '150%', value: '150%'},
							{title: '200%', value: '200%'}
						],
						title: 'Size'
					}
				},
				{
					type: 'options',
					details: {
						variable: 'backgroundposition',
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
						title: 'Position'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'backgroundblur',
						value: 0,
						unit: 'px',
						max: 25,
						step: 1,
						title: 'Background image blur'
					}
				}
			]
		},
		{
			title: 'Popout image',
			icon: 'Photograph',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'popout',
						start: 'var(--background)',
						value: '',
						title: 'Popout background Image'
					}
				},
				{
					type: 'options',
					details: {
						variable: 'popoutsize',
						value: 'var(--backgroundsize)',
						options: [
							{title: 'Cover', value: 'cover'},
							{title: 'Contain', value: 'contain'},
							{title: 'Auto', value: 'auto'},
							{title: '100%', value: '100%'},
							{title: '150%', value: '150%'},
							{title: '200%', value: '200%'}
						],
						title: 'Size'
					}
				},
				{
					type: 'options',
					details: {
						variable: 'backgroundposition',
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
						title: 'Position'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'popoutblur',
						value: 0,
						unit: 'px',
						max: 25,
						step: 1,
						title: 'Popout image blur'
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
						variable: 'transparencycolor',
						value: '0,0,0',
						type: 'RGB',
						title: 'Transparency colour'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'accentcolor',
						value: '190,78,180',
						type: 'RGB',
						title: 'Accent colour'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'backdrop',
						value: 'rgba(0,0,0,0.85)',
						alpha: true,
						rule: true,
						type: 'RGB',
						title: 'Backdrop colour',
						hint: 'Backdrop = viewing profile/notification settings'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'textshadow',
						value: 'transparent',
						alpha: true,
						rule: true,
						type: 'RGB',
						title: 'Text shadow colour',
						hint: 'Text shadow for accent colour areas'
					}
				}
			]
		},
		{
			title: 'Brightness',
			icon: 'Sun',
			inputs: [
				{
					type: 'slider',
					details: {
						variable: 'transparencyalpha',
						value: 0.15,
						max: 1,
						step: 0.02,
						title: 'Transparency brightness',
						hint: 'General darkness of the app'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'messagetransparency',
						value: 0.5,
						max: 1,
						step: 0.02,
						title: 'Message brightness'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'guildchanneltransparency',
						value: 0.15,
						max: 1,
						step: 0.02,
						title: 'Guild/Channel list brightness'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'chatinputtransparency',
						value: 0,
						max: 1,
						title: 'Chat box brightness'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'memberlisttransparency',
						value: 0,
						max: 1,
						step: 0.02,
						title: 'Members list brightness'
					}
				},
			]
		},
		{
			title: 'Font',
			icon: 'MenuAlt1',
			inputs: [
				{
					type: 'font',
					details: {
						variable: 'font',
						index: 0,
						value: 'Whitney',
						title: 'App font'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'textbrightest',
						value: '255,255,255',
						type: 'RGB',
						title: 'Text brightest'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'textbrighter',
						value: '222,222,222',
						type: 'RGB',
						title: 'Text brighter'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'textbright',
						value: '200,200,200',
						type: 'RGB',
						title: 'Text bright'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'textdark',
						value: '160,160,160',
						type: 'RGB',
						title: 'Text dark'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'textdarker',
						value: '125,125,125',
						type: 'RGB',
						title: 'Text darker'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'textdarkest',
						value: '90,90,90',
						type: 'RGB',
						title: 'Text darkest'
					}
				},
			]
		},
		{
			title: 'Others',
			icon: 'Cog',
			inputs: [
				{
					type: 'options',
					details: {
						variable: 'settingsicons',
						title: 'Show setting icons',
						value: '1',
						options: [
							{title: 'True', value: '1'},
							{title: 'False', value: '0'}
						],
						customValue: false
					}
				}
			]
		}
	],
	hiddenVars: [
		{
			variable: 'backdropsize',
			value: 'var(--background-size)'
		},
		{
			variable: 'backdropblur',
			value: '0px'
		},
		{
			variable: 'version1_0_5',
			value: 'none'
		}
	],
	addons: ['rs', 'columns', 'hsl']
}

export default theme;