import type {IDev} from './dev';
import type {IColour, IFont, IImage, INumber, IOptions, ISlider, IText} from './inputs';

export interface IAddon {
  name: string,
  description: string,
  preview: string[],
  imports: string[],
  developer: IDev,
  selector: string,
  use: boolean,
  group: string,
  variables: (IColour|IFont|IImage|INumber|IOptions|ISlider|IText)[],
  addons?: string[],
  hiddenVars?: {
    variable: string,
    value: string
  }[]
}