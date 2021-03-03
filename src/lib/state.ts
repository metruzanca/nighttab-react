import { BookmarkGroup, BookmarkItem, HSL, Instance as InstanceType, RGB, State} from 'types'
import packagejson from "../../package.json";

/*
    __      __._____________ 
   /  \    /  \   \______   \
   \   \/\/   /   ||     ___/
    \        /|   ||    |    
     \__/\  / |___||____|                 

  Heavily work in progress. Not safe to use to generate new instances of nighttab
*/

/*
  nighttab: boolean
  version: number
  state: State
  bookmarks: Array<BookmarkGroup>
*/

// Yay for prototypes
export function Instance(this: InstanceType){
  this.nighttab = nighttab()
  this.version = version()
  //@ts-ignore
  this.state = state()
  //@ts-ignore
  this.bookmarks = bookmarks()
}

// TODO nighttab: boolean... What was this for again?
function nighttab(){
  return true
}

// TODO get version from package.json
function version(){
  return packagejson.version
}

interface BookmarkGenerator {
  url: string
}

function bookmark({
  url
}: BookmarkGenerator): BookmarkItem {
  return {
    url,
    wide: false,
    tall: false,
    searchMatch: false,
    timeStamp: timestamp(),
    display: {
      direction: "vertical",
      order: "visualname",
      alignment: "centercenter",
      gutter: 2,
      rotate: 0,
      translate: {
        x: 0,
        y: 0
      },
      visual: {
        show: true,
        type: "icon",
        letter: {
          size: 3,
          text: "AS"
        },
        image: {
          size: 3,
          url: ""
        },
        icon: {
          size: 3,
          name: "dice-d20",
          prefix: "fas",
          label: "Dice D20"
        },
        shadow: {
          size: 0
        }
      },
      name: {
        show: true,
        text: "awesomeSheet",
        size: 0.9
      }
    },
    accent: {
      by: "theme",
      hsl: { h: 0, s: 0, l: 0 },
      rgb: { r: 0, g: 0, b: 0 },
    },
    color: {
      by: "theme",
      hsl: { h: 0, s: 0, l: 0 },
      rgb: { r: 0, g: 0, b: 0 },
      opacity: 1
    },
    background: {
      show: false,
      type: "image",
      opacity: 1,
      image: {
        url: ""
      },
      video: {
        url: ""
      }
    },
  }
}

function hex2rgb(hex: string){
  
}

function timestamp(){
  return Date.now()
}

export function fromTimestamp(number: number){
  return new Date(number)
}

export function rgb2hsl({r, g, b}: RGB): HSL {
  // Make r, g, and b fractions of 1
  r /= 255
  g /= 255
  b /= 255

  // Find greatest and smallest channel values
  const cmin = Math.min(r,g,b)
  const cmax = Math.max(r,g,b)
  const delta = cmax - cmin

  let h = 0
  // Calculate hue
  // No difference
  if (delta === 0)
    h = 0
  // Red is max
  else if (cmax === r)
    h = ((g - b) / delta) % 6
  // Green is max
  else if (cmax === g)
    h = (b - r) / delta + 2
  // Blue is max
  else
    h = (r - g) / delta + 4

  h = Math.round(h * 60)
    
  // Make negative hues positive behind 360°
  if (h < 0) h += 360
  // Calculate lightness
  const l = (cmax + cmin) / 2

  // Calculate saturation
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
      
  return {
    h: h,
    // Multiply l and s by 100
    s: +(s * 100).toFixed(1),
    l: +(l * 100).toFixed(1),
  }
}


// I like functional programming too much

function _rbg(m:number){
  return (r: number, g: number, b: number) => ({
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  })
}

export function hsl2rgb({h, s, l}: HSL): RGB {
  // Must be fractions of 1
  s /= 100
  l /= 100

  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs((h / 60) % 2 - 1))
  const m = l - c/2
 
  const rbg = _rbg(m)

  if (0   <= h && h < 60)  return rbg(c, x, 0)
  if (60  <= h && h < 120) return rbg(x, c, 0)
  if (120 <= h && h < 180) return rbg(0, c, x)
  if (180 <= h && h < 240) return rbg(0, x, c)
  if (240 <= h && h < 300) return rbg(x, 0, c)
  // if (300 <= h && h < 360)
  return rbg(c, 0, x)
}