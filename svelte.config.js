import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte"],
	preprocess: [
		sveltePreprocess({
			defaults: {
				script: 'typescript',
				style: "postcss",
			},
			postcss: true
		}),
	],
	kit: {
		adapter: adapter(),
		target: '#svelte',
		vite: {
			optimizeDeps: {
				include: ['svelte-hero-icons']
			}
		}
	}
};

export default config;