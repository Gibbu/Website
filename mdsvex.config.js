import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import slug from 'rehype-slug';
import externalLinks from 'rehype-external-links';
import { join } from 'path';

const blogLayout = join(process.cwd(), 'src', 'routes', 'blog', 'blogLayout.svelte');

const config = defineConfig({
	extensions: ['.md'],

	smartypants: {
		dashes: 'oldschool'
	},

	layout: blogLayout,

	remarkPlugins: [],
	rehypePlugins: [slug, [externalLinks, { target: '_blank', rel: 'noopener noreferrer' }]]
});

export default config;
