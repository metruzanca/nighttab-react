import { HSL, RGB } from "./color";

interface Selected {
  selected: String
}

interface Engine {
  [name:string]: {
    url: string
    name: string
    queryName: string
  }
}

type SearchEngineDictionary = Engine & Selected

export interface Header {
  area: {
    width: number
    justify: "center"
    align: "center"
  }
  item: {
    justify: "left"
  }
  greeting: Greeting
  clock: Clock
  transitional: Transitional
  date: NighttabDate
  search: Search
  editAdd: {
    show: boolean
    size:number
    opacity:number
    newLine: boolean
  }
  colorAccent: ColorAccent
  menu: {
    show: boolean
    size: number
    opacity: number
    newLine: boolean
  }
  order: string[]
  border: {
    top: number
    bottom: number
  }
  color: {
    by: "theme"
    hsl: HSL
    rgb: RGB
    // idk
    style: "scroll"
    opacity: number
    show: boolean
    newLine: boolean
  }
  // idk
  position: "inline"
  radius: boolean
}

export interface Clock {
  hours: {
    show: boolean
    display: "number"
  }
  minutes: {
    show: boolean
    display: "number"
  }
  seconds: {
    show: boolean
    display: "number"
  }
  separator: {
    show: boolean
    text: string
  }
  meridiem: {
    show: boolean
  }
  hour24: {
    show: boolean
  }
  size: number
  newLine: boolean
}

export interface Greeting {
  show: boolean
  type: "good"
  name: string
  size: number
  newLine: boolean
}

export interface Transitional {
  show: boolean
  type: "timeanddate"
  size: number
  newLine: boolean
}

export interface Search {
  show: boolean
  style: "box"
  width: {
    by: "auto"
    size: number
  }
  focus: boolean
  engine: SearchEngineDictionary
  text: {
    justify: "center"
  }
  size: number
  opacity: number
  newLine: boolean
  newTab: boolean
}

// named NighttabDate to avoid possible confusion with Date when importing
interface NighttabDate {
  // IDK in general
  day: {
    show: boolean
    display: "word"
    weekStart: "monday"
    length: "long"
  }
  date: {
    show: boolean
    display: "number"
    ordinal: boolean
  }
  month: {
    show: boolean
    display: "word"
    length: "long"
    ordinal: boolean
  }
  year: {
    show: boolean
    display: "number"
  }
  separator: {
    show: boolean
    text: string
  }
  format: "datemonth"
  size: number
  newLine: boolean
}

// This might not be needed
export interface ColorAccent {
  dot: {
    show: boolean
  }
  show: boolean
  size:number
  opacity:number
  newLine: boolean
}

/* << Order >> 
  "greeting",
  "transitional",
  "clock",
  "date",
  "search",
  "editAdd",
  "colorAccent",
  "menu",
*/