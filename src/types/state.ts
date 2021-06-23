import { HSL, RGB } from "./color";
import { Header } from "./header";
import { Layout } from "./settings/layout";

/**Settings maps to "state" in nighttab's JSON currently */
export interface Settings {
  // edit: boolean
  shade: boolean
  pagelock: boolean
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


export interface Link {
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
  breakpoint: string
}

export interface Group {
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

export interface Theme {
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
  style: ColorScheme
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

export type ColorScheme = "dark" | "light" | "system"

interface Font {
  name: string
  weight: number
  // idk
  style: "normal"
}

export interface Background {
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