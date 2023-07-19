/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['Inter', 'Roboto', 'Arial', 'sans-serif'],
				display: ['Manrope', 'Inter', 'Roboto', 'Arial', 'sans-serif']
			}
		}
	},
	plugins: []
};
