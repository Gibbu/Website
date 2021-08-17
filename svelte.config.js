import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess({
			scss: {
				prependData: `@use 'src/scss/functions.scss' as *;`
			},
			postcss: {
				plugins: [autoprefixer()]
			}
		}),
    kit: {
		target: '#svelte',
		vite: {
			optimizeDeps: {
				include: ['svelte-hero-icons'],
				exclude: []
			},
			resolve: {
				alias: {
					'$components': path.resolve('./src/components'),
					'$scss': path.resolve('./src/scss')
				}
			}
		}
	}
};

export default config;
