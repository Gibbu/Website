import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import {resolve} from 'path';

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
			},
			resolve: {
				alias: {
					'$interfaces': resolve('./src/interfaces'),
					'$components': resolve('./src/components'),
					'$data': resolve('./src/data')
				}
			}
		}
	}
};

export default config;