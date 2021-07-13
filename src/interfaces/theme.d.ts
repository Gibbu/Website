import type {IDev} from './dev';
import type {Inputs} from './inputs';
import type {IAddon} from './addon';

interface ThemeVars {
  title: string,
  icon: ('Photograph' | 'Sun' | 'ColorSwatch' | 'MenuAlt1' | 'Puzzle' | 'Globe' | 'Home' | 'User' | 'Server' | 'Cog' | 'Chat'),
  inputs: Inputs[],
  modal?: boolean
}
interface HiddenVars {
  variable: string,
  value: string
}
interface meta {
  name: string,
  author: string,
  version: string,
  description: string,
  source: string,
  invite?: string,
  donate?: string,
  patreon?: string,
  website?: string,
  authorId?: string,
  updateUrl?: string
}

interface ITheme {
  name: string,
  preview: string,
  image: string,
  developers: IDev[],
  meta: meta,
  imports: string[],
  fonts: string[],
  variables: ThemeVars[],
  hiddenVars?: HiddenVars[],
  addons?: string[]
}

interface StoreTheme {
  name: string,
  meta: meta,
  developers: IDev[],
  imports: string[],
  fonts: string[],
  variables: ThemeVars[],
  addons: (IAddon | any)[],
  hiddenVars?: HiddenVars[]
}