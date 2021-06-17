import type {IDev} from './dev';
import type {IColour, IFont, IImage, INumber, IOptions, ISlider, IText} from './inputs';
import type {IAddon} from './addon';

interface variables {
  title: string,
  icon: ('Photograph'|'Sun'|'ColorSwatch'|'MenuAlt1'|'Puzzle'|'Globe'|'Home'|'User'|'Server'|'Cog'|'Chat'),
  inputs: (IColour|IFont|IImage|INumber|IOptions|ISlider|IText)[],
  modal?: boolean
}
interface hiddenVars {
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
  authorId?: number,
  updateUrl?: string
}

export interface ITheme {
  name: string,
  preview: string,
  image: string,
  developers: IDev[],
  meta: meta,
  imports: string[],
  fonts: string[],
  variables: variables[],
  features: ('background'|'addons'|'homebtn'|'font')[],
  hiddenVars?: hiddenVars[],
  addons?: string[]
}

export interface StoreTheme {
  name: string,
  meta: meta,
  developers: IDev[],
  imports: string[],
  fonts: string[],
  variables: variables[],
  addons: (IAddon|any)[],
  hiddenVars?: hiddenVars[]
}