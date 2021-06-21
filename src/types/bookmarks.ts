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
    order: "visualname" | "namevisual"
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
      shadow: {
        size: number
      }
      type: 'icon' | 'letter' | 'image'
      icon: {
        size: number
        // This name comes from fontawesome (e.g. dice-d20)
        name: string
        // I presume this for the various FA icon sets
        prefix: string
        label: string
      }
      letter: {
        size: number
        text: string
      }
      image: {
        size: number
        url: string
      }
    }
    name: {
      show: boolean
      text: string
      size: number
    }
  }
}

// Duplicate types. Can't use discriminating union here on these 3 types
// We want to store values if we change type, so user can change back

// This type is handy for intellisense in LinkItem
export type VisualElement = VisualIcon | VisualLetter | VisualImage

interface Visual {
  show: boolean
  shadow: {
    size: number
  }
}

export interface VisualIcon extends Visual {
  type: 'icon'
  icon: {
    size: number
    // This name comes from fontawesome (e.g. dice-d20)
    name: string
    // I presume this for the various FA icon sets
    prefix: string
    label: string
  }
}

export interface VisualLetter extends Visual {
  type: 'letter'
  letter: {
    size: number
    text: string
  }
}

export interface VisualImage extends Visual {
  type: 'image'
  image: {
    size: number
    url: string
  }
}