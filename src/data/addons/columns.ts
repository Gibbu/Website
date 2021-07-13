import type {IAddon} from '$interfaces/addon';
import DevilBro from '$data/devs/devilbro';

const addon: IAddon = {
	name: 'ServerColumns',
	description: 'Changes the Server List to a gridlike container to allow servers to be displayed in columns.',
	developer: DevilBro,
	imports: ['https://mwittrien.github.io/BetterDiscordAddons/Themes/ServerColumns/ServerColumns.css'],
	preview: ['https://mwittrien.github.io/BetterDiscordAddons/Themes/ServerColumns/ServerColumns.theme.css'],
	group: 'serverlist',
	selector: 'columns',
	use: false,
	variables: [
		{
			type: 'number',
			details: {
				addon: true,
				variable: 'columns',
				value: 3,
				min: 1,
				title: 'Number of columns'
			}
		},
		{
			type: 'number',
			details: {
				addon: true,
				variable: 'guildgap',
				value: 3,
				min: 0,
				title: 'Server icon spacing'
			}
		},
		{
			type: 'options',
			details: {
				addon: true,
				variable: 'aligndms',
				value: '0',
				customValue: false,
				options: [
					{title: 'True', value: '0'},
					{title: 'False', value: '1'}
				],
				title: 'Align DMs'
			}
		}
	]
}

export default addon;