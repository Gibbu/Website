export interface IColour {
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

export interface IFont {
  type: 'font',
  details: {
    variable: string,
    title: string,
    index: number,
    value?: string
  }
}

export interface IImage {
  type: 'image',
  details: {
    variable: string,
    start: string,
    title: string,
    value?: string
  }
}

export interface INumber {
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

export interface IOptions {
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

export interface ISlider {
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

export interface IText {
  type: 'text',
  details: {
    variable: string,
    value: string,
    title: string,
    addon?: boolean,
    hint?: string
  }
}