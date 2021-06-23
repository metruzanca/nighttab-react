import { Link, PayloadAction, Reducer } from "types"


// Actions
type scope = 'settings/link'
type UPDATE_LINK =  `${scope}/UPDATE_LINK`
type updateLink = PayloadAction<UPDATE_LINK, Partial<Link>>

export type LinkTypes = updateLink

// Reducer
export const defaultLink: Link = {
  "area": {
    "width": 100,
    "direction": "ltr",
    "justify": "center"
  },
  "item": {
    "color": {
      "by": "theme",
      "hsl": {
        "h": 0,
        "s": 0,
        "l": 0
      },
      "rgb": {
        "r": 0,
        "g": 0,
        "b": 0
      },
      "opacity": 1
    },
    "accent": {
      "by": "theme",
      "hsl": {
        "h": 0,
        "s": 0,
        "l": 0
      },
      "rgb": {
        "r": 0,
        "g": 0,
        "b": 0
      }
    },
    "background": {
      "opacity": 1
    },
    "display": {
      "visual": {
        "letter": {
          "size": 3
        },
        "icon": {
          "size": 3
        },
        "image": {
          "size": 3
        },
        "shadow": {
          "size": 0
        }
      },
      "name": {
        "show": true,
        "size": 0.9
      },
      "gutter": 2,
      "direction": "vertical",
      "order": "visualname",
      "alignment": "centercenter",
      "rotate": 0,
      "translate": {
        "x": 0,
        "y": 0
      }
    },
    "url": {
      "show": true
    },
    "line": {
      "show": true
    },
    "shadow": {
      "show": true
    },
    "hoverScale": {
      "show": true
    },
    "newTab": false,
    "size": 1,
    "border": 0
  },
  "show": true,
  "add": false,
  "edit": false,
  "style": "block",
  "orientation": "bottom",
  "breakpoint": "lg"
}


export const linkReducer: Reducer<Link, updateLink> = (
  state = defaultLink, action
) => {
  switch (action.type) {
    case "settings/link/UPDATE_LINK":
    default: return state
  }
}


// Action Creators
export const linkActions = {
  updateLink (link: Partial<Link>): updateLink {
    return { type: "settings/link/UPDATE_LINK", payload: link }
  },
}
