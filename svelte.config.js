import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

export default {
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [autoprefixer()]
    }
  })
}
