import type {IDev} from './dev';
import type {IColour, IFont, IImage, INumber, IOptions, ISlider, IText} from './inputs';
import type {Inputs} from './theme';

interface IAddon {
	name: string,
	description: string,
	preview: string[],
	imports: string[],
	developer: IDev,
	selector: string,
	use: boolean,
	group: string,
	variables: Inputs[],
	addons?: string[],
	hiddenVars?: {
		variable: string,
		value: string
	}[]
}