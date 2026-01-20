import adapter from '@sveltejs/adapter-static'
import autoprefixer from 'autoprefixer'
import { mdsvex } from 'mdsvex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import sveltePreprocess from 'svelte-preprocess'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	
	extensions: ['.svelte', '.md'],

	preprocess: [
		sveltePreprocess({
			scss: {
				prependData: `@import 'src/lib/_variables.scss';`
			},
			postcss: {
				plugins: [autoprefixer]
			}
		}),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
			],
		}),
	],
};

export default config;
