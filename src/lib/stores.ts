import {writable} from 'svelte/store';
import type {StoreTheme} from './interfaces/theme';

export const loaded = writable<true|false>(false);

export const preview = writable<any>(null);
export const THEME = writable<StoreTheme>({
	name: '',
	developers: [],
	fonts: [],
	imports: [],
	meta: {
		name: '',
		author: '',
		description: '',
		source: '',
		version: '',
	},
	hiddenVars: [],
	variables: [],
	addons: []
});