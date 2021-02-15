import { HSL, RGB } from "./color";

export interface State {
  edit: boolean
  pagelock: boolean
  shade: boolean
  edge: boolean
  search: boolean
  menu: boolean
  modal: boolean
  dropdown: boolean
  autoSuggest: boolean
  
  header: Header
  link: Link
  group: Group
  layout: Layout
  theme: Theme
  background: Background
}

interface Header {
  area: {
    width: number
    justify: "center"
    align: "center"
  }
  item: {
    justify: "left"
  }
  greeting: {
    show: boolean
    type: "good"
    name: string
    size: number
    newLine: boolean
  }
  clock: {
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
  transitional: {
    show: boolean
    type: "timeanddate"
    size: number
    newLine: boolean
  }
  // IDK in general
  date: {
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
  search: {
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
  editAdd: {
    show: boolean
    size:number
    opacity:number
    newLine: boolean
  }
  colorAccent: {
    dot: {
      show: boolean
    }
    show: boolean
    size:number
    opacity:number
    newLine: boolean
  }
  menu: {
    show: boolean
    size: number
    opacity: number
    newLine: boolean
  }
  order: [
    "greeting",
    "transitional",
    "clock",
    "date",
    "search",
    "editAdd",
    "colorAccent",
    "menu",
  ]
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

interface Link {
  area: {
    width: number
    //idk
    direction: "ltr"
    justify: "center"
  }
  item: {
    color: {
      by: "theme"
      hsl: HSL
      rgb: RGB
      opacity: number
    }
    accent: {
      by: "theme"
      hsl: HSL
      rgb: RGB
    }
    background: {
      opacity: number
    }
    display: {
      visual: {
        letter: {
          size: number
        }
        icon: {
          size: number
        }
        image: {
          size: number
        }
        shadow: {
          size: number
        }
      }
      name: {
        show: boolean
        size: number
      }
      gutter: number
      direction: "vertical"
      order: "visualname"
      alignment: "centercenter"
      rotate: number
      translate: {
        x: number
        y: number
      }
    }
    url: {
      show: boolean
    }
    line: {
      show: boolean
    }
    shadow: {
      show: boolean
    }
    hoverScale: {
      show: boolean
    }
    newTab: boolean
    size: number
    border: number
  }
  show: boolean
  add: boolean
  edit: boolean
  style: "block"
  orientation: "bottom"
  breakpoint: "xl"
}

interface Group {
  area: {
    // src
    justify: "left"
  }
  name: {
    show: boolean
    size: number
  }
  openAll: {
    show: boolean
    size: number
    opacity: number
  }
  border: number
  // src
  order: "headerbody"
  add: boolean
  edit: boolean
}

interface Layout {
  // idk
  alignment: "centercenter"
  // idk
  order: "headerlink"
  // idk
  direction: "vertical"
  padding: number
  gutter: number
  size: number
  width: number
  scrollPastEnd: boolean
  // idk
  scrollbars: "auto"
  title: string
}

interface Theme {
  accent: {
    hsl: HSL
    rgb: RGB
    random: {
      active: boolean
      // idk
      style: "any"
    }
    cycle: {
      active: boolean
      speed: number
      step: number
    }
  }
  color: {
    hsl: HSL
    rgb: RGB
    contrast: {
      light: number
      dark: number
    }
    generated: {
      negative: {
        "1": RGB
        "2": RGB
        "3": RGB
        "4": RGB
        "5": RGB
        "6": RGB
        "7": RGB
        "8": RGB
        "9": RGB
        "10": RGB
      }
      positive: {
        "1": RGB
        "2": RGB
        "3": RGB
        "4": RGB
        "5": RGB
        "6": RGB
        "7": RGB
        "8": RGB
        "9": RGB
        "10": RGB
      }
    }
  }
  font: {
    display: Font
    ui: Font
  }
  // idk but im guessing "dark" | "light"
  style: "dark"
  radius: number
  shadow: number
  shade: {
    opacity: number
  }
  custom: {
    // array of???? idk
    all: []
    // whats an edit doing down here? idk
    edit: boolean
  }
}

interface Font {
  name: string
  weight: number
  // idk
  style: "normal"
}

interface Background {
  color: {
    by: "theme"
    hsl: HSL
    rgb: RGB
  }
  visual: {
    show: boolean
    // idk
    type: "video"
    image: {
      // idk
      type: "file"
      file: {
        name: string
        // Looks like a string but idk what this is. Could potentially be a blob
        data: ""
      }
      url: string
    }
    video: {
      url: string
    }
    blur: number
    scale: number
    opacity: number
    grayscale: number
    accent: number
    vignette: {
      opacity: number
      start: number
      end: number
    }
  }
}


type SearchEngineDictionary = Engine & Selected

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