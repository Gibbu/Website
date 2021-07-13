interface IColour {
  type: 'colour',
  details: {
    variable: string,
    value: string,
    type: 'HEX'|'RGB',
    title: string,
    rule?: boolean,
    addon?: boolean,
    alpha?: boolean,
    hint?: string
  }
}

interface IFont {
  type: 'font',
  details: {
    variable: string,
    title: string,
    index: number,
    value?: string
  }
}

interface IImage {
  type: 'image',
  details: {
    variable: string,
    start: string,
    title: string,
    value?: string
  }
}

interface INumber {
  type: 'number',
  details: {
    variable: string,
    value: number,
    title: string,
    unit?: string,
    min?: number,
    addon?: boolean,
    hint?: string
  }
}

interface IOptions {
  type: 'options',
  details: {
    variable: string,
    value: string,
    options: {
      title: string,
      value: string
    }[],
    title: string,
    customValue?: boolean,
    step?: number,
    min?: number,
    addon?: boolean,
    hint?: string
  }
}

interface ISlider {
  type: 'slider',
  details: {
    variable: string,
    value: number,
    title: string,
    max: number,
    unit?: string,
    step?: number,
    min?: number,
    addon?: boolean,
    hint?: string
  }
}

interface IText {
  type: 'text',
  details: {
    variable: string,
    value: string,
    title: string,
    addon?: boolean,
    hint?: string
  }
}

export type Inputs = (IColour | IFont | IImage | INumber | IOptions | ISlider | IText);