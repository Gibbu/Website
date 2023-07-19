interface Project {
	name: string;
	description: string;
	href: string;
	archived?: boolean;
}

export const projects: Project[] = [
	{
		name: 'SVooltip',
		description: 'A basic Svelte tooltip directive.',
		href: 'https://github.com/Gibbu/svooltip'
	},
	{
		name: 'BetterDiscord Theme Editor',
		description: 'Customize BetterDiscord Themes with an easy to use interface.',
		href: 'https://github.com/Gibbu/BDThemeEditor'
	},
	{
		name: 'bd-scss',
		description: 'Simple package to create themes for BetterDiscord using SCSS.',
		href: 'https://github.com/Gibbu/bd-scss'
	},
	{
		name: 'create-bd-theme',
		description: 'A CLI to scaffold BetterDiscord themes using SCSS.',
		href: 'https://github.com/Gibbu/create-bd-theme'
	},
	{
		name: 'BetterDiscordLibrary',
		description: 'A website to view all available themes and plugins for BetterDiscord.',
		href: 'https://github.com/Gibbu/BetterDiscordLibrary',
		archived: true
	}
];
