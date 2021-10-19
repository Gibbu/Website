interface Project {
	name: string,
	description: string,
	href: string,
	archived?: boolean
}

const projects: Project[] = [
	{
		name: 'BetterDiscord Theme Editor',
		description: 'Customize BetterDiscord Themes with an easy to use interface.',
		href: 'https://github.com/Gibbu/BDThemeEditor'
	},
	{
		name: 'BDThemeTemplate',
		description: 'Quick template to create BetterDiscord themes using SCSS.',
		href: 'https://github.com/Gibbu/BDThemeTemplate',
	},
	{
		name: 'BetterDiscordLibrary',
		description: 'A website to view all available themes and plugins for BetterDiscord.',
		href: 'https://github.com/Gibbu/BetterDiscordLibrary',
		archived: true
	}
];

export default projects;