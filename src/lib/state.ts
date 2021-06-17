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

// TODO remove prototpyes. This will get messy
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

function timestamp(){
  return Date.now()
}

export function fromTimestamp(number: number){
  return new Date(number)
}