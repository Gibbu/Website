import {writable} from 'svelte/store';
import type {StoreTheme} from '$interfaces/theme';

export const loaded = writable<true|false>(false);

export const preview = writable<any>(null);
export const THEME = writable<StoreTheme|null>(null);