import type {ITheme} from '$lib/interfaces/theme';
import DevilBro from '../devs/devilbro';

const theme: ITheme = {
  name: 'BasicBackground',
  preview: 'https://mwittrien.github.io/BetterDiscordAddons/Themes/BasicBackground/BasicBackground.theme.css',
  image: 'https://i.imgur.com/XORsntg.jpg',
  developers: [DevilBro],
  features: ['background', 'addons', 'font'],
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
    authorId: 278543574059057154,
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
      title: 'Custom Font',
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