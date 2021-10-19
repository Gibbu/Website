interface Theme {
	name: string,
	description: string,
	bd_download: number
	new?: boolean
}

const themes: Theme[] = [
	{
		name: 'SoftX',
		description: 'A soft and comfy feel for Discord.',
		bd_download: 515,
		new: true
	},
	{
		name: 'Slate',
		description: `An optimized, consistent, and functional theme for Discord based on GitHub's design language.`,
		bd_download: 1
	},
	{
		name: 'Frosted Glass',
		description: `Display your picture of choice with adjustable blur and brightness.`,
		bd_download: 40
	},
	{
		name: 'MinimalCord',
		description: `Changes Discord enough to give it a fresh feel while also making it darker.`,
		bd_download: 125
	},
	{
		name: 'iPadOS',
		description: `Discord redesigned to be simplified. Design by jacktompsett on Behance.`,
		bd_download: 402
	},
	{
		name: 'SimplyDark',
		description: `A sharp and simple theme for Discord.`,
		bd_download: 394
	},
	{
		name: 'RadialStatus',
		description: `Changes the status icons to wrap around the avatar.`,
		bd_download: 32
	},
	{
		name: 'Horizontal Server List',
		description: `Moves the server list from the left to the top of Discord.`,
		bd_download: 124
	},
]

export default themes;