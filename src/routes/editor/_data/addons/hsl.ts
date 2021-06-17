import type {IAddon} from '$lib/interfaces/addon';
import Gibbu from '../devs/gibbu';

const addon: IAddon = {
	name: 'Horizontal Server List',
	description: 'Moves the server list from the left to the top of Discord.',
	developer: Gibbu,
	imports: ['https://discordstyles.github.io/HorizontalServerList/base.css'],
	preview: ['https://discordstyles.github.io/HorizontalServerList/HorizontalServerList.theme.css'],
	group: 'serverlist',
	selector: 'hsl',
	use: false,
	variables: [
		{
			type: 'number',
			details: {
				addon: true,
				variable: 'HSL-server-icon-size',
				value: 45,
				unit: 'px',
				title: 'Server icon size'
			}
		},
		{
			type: 'number',
			details: {
				addon: true,
				variable: 'HSL-server-spacing',
				value: 10,
				unit: 'px',
				title: 'Server icon spacing'
			}
		}
	]
}

export default addon;