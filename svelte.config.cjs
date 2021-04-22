const sveltePreprocess = require('svelte-preprocess');
const adapter = require('@sveltejs/adapter-static');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
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
		paths: {
			assets: '/Website',
			base: '/Website'
		},
		vite: {
			optimizeDeps: {
				include: ['svelte-hero-icons']
			},
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
