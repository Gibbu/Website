const colors = require('tailwindcss/colors');
const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");

module.exports = {
	mode: 'jit',
	purge: {
		content: [
			"./src/**/*.{html,js,svelte,ts}",
		],
		options: {
			defaultExtractor: (content) => [
				...tailwindExtractor(content),
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
			keyframes: true,
		},
	},
	theme: {
		fontFamily: {
			'display': ['Montserrat', 'sans-serif'],
			'body': ['Inter', 'Open Sans', 'Roboto', 'sans-serif']
		},
		extend: {
			colors: {
				emerald: colors.emerald
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms')
	],
};
