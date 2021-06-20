import { HSL, RGB } from ".";

export interface BookmarkGroup {
  name: {
    text: string
    show: boolean
  }
  openAll: {
    show: boolean
  }
  items: BookmarkItem[]
}

// TODO reverse engineer original src to confirm assumptions
// The src could also have "hidden" properties that simply aren't added by default

export interface BookmarkItem {
  url: string
  wide: boolean
  tall: boolean
  searchMatch: boolean
  timeStamp: number
  accent: {
    // look at source for "by" property
    by: "theme"
    hsl: HSL
    rgb: RGB
  }
  color: {
    by: "theme"
    hsl: HSL
    rgb: RGB
    opacity: number
  }
  background: {
    show: boolean
    // source for "image" ? e.g. "image" | "icon" | "url"(?)
    type: "image" | "video"
    opacity: number
    image: {
      url: string
    },
    video: {
      url: string
    }
  }
  display: {
    // I assume this is vertical and horizontal
    direction: "vertical" | "horizontal"
    // look at src for list
    order: "visualname"
    // look at src for list
    alignment: "centercenter"
    gutter: number
    rotate: number
    translate: {
      x: number
      y: number
    },
    visual: {
      show: boolean
      // look at src for list
      type: "icon" | "letter" | "icon"
      letter: {
        size: number
        text: string
      }
      image: {
        size: number
        url: string
      }
      icon: {
        size: number
        // This name comes from fontawesome (e.g. dice-d20)
        name: string
        // I presume this for the various FA icon sets
        prefix: string
        label: string
      }
      shadow: {
        size: number
      }
    }
    name: {
      show: boolean
      text: string
      size: number
    }
  }
}