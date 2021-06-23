import { Header, PayloadAction, Reducer } from "types"


// Actions
type scope = 'settings/header'
type UPDATE_HEADER =  `${scope}/UPDATE_HEADER`
type updateHeader = PayloadAction<UPDATE_HEADER, Partial<Header>>

export type HeaderTypes = updateHeader


// Reducer
export const defaultHeader: Header = {
  "area": {
    "width": 100,
    "justify": "center",
    "align": "center"
  },
  "item": {
    "justify": "left"
  },
  "greeting": {
    "show": false,
    "type": "good",
    // "custom": "",
    "name": "",
    "size": 1,
    "newLine": false
  },
  "clock": {
    "hours": {
      "show": true,
      "display": "number"
    },
    "minutes": {
      "show": true,
      "display": "number"
    },
    "seconds": {
      "show": false,
      "display": "number"
    },
    "separator": {
      "show": true,
      "text": ""
    },
    "meridiem": {
      "show": true
    },
    "hour24": {
      "show": true
    },
    "size": 1,
    "newLine": false
  },
  "transitional": {
    "show": false,
    "type": "timeanddate",
    "size": 1,
    "newLine": false
  },
  "date": {
    "day": {
      "show": true,
      "display": "word",
      "weekStart": "monday",
      "length": "long"
    },
    "date": {
      "show": true,
      "display": "number",
      "ordinal": true
    },
    "month": {
      "show": true,
      "display": "word",
      "length": "long",
      "ordinal": true
    },
    "year": {
      "show": false,
      "display": "number"
    },
    "separator": {
      "show": true,
      "text": ""
    },
    "format": "datemonth",
    "size": 1,
    "newLine": false
  },
  "search": {
    "show": true,
    "style": "box",
    "width": {
      "by": "auto",
      "size": 30
    },
    "focus": false,
    "engine": {
      "selected": "google",
      "google": {
        "url": "https://www.google.com/search",
        "name": "Google"
      },
      "duckduckgo": {
        "url": "https://duckduckgo.com/",
        "name": "DuckDuckGo"
      },
      "youtube": {
        "url": "https://www.youtube.com/results?search_query=",
        "name": "YouTube"
      },
      "giphy": {
        "url": "https://giphy.com/search/",
        "name": "Giphy"
      },
      "bing": {
        "url": "https://www.bing.com/search?q=",
        "name": "Bing"
      },
      "custom": {
        "url": "",
        "name": "",
        "queryName": ""
      }
    },
    "text": {
      "justify": "center"
    },
    "size": 1,
    "opacity": 1,
    "newLine": false,
    "newTab": false
  },
  "editAdd": {
    "show": true,
    "size": 1,
    "opacity": 1,
    "newLine": false
  },
  "colorAccent": {
    "dot": {
      "show": true
    },
    "show": true,
    "size": 1,
    "opacity": 1,
    "newLine": false
  },
  "menu": {
    "show": true,
    "size": 1,
    "opacity": 1,
    "newLine": false
  },
  "order": [
    "greeting",
    "transitional",
    "clock",
    "date",
    "search",
    "editAdd",
    "colorAccent",
    "menu"
  ],
  "border": {
    "top": 0,
    "bottom": 0
  },
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
    "style": "scroll",
    "opacity": 0.95,
    "show": false,
    "newLine": false
  },
  "position": "inline",
  "radius": false
}


export const headerReducer: Reducer<Header, updateHeader> = (
  state = defaultHeader, action
) => {
  switch (action.type) {
    case "settings/header/UPDATE_HEADER": return {
      ...state,
      ...action.payload,
    }
    default: return state
  }
}


// Action Creators
export const headerActions = {
  updateHeader (header: Partial<Header>): updateHeader {
    return { type: "settings/header/UPDATE_HEADER", payload: header }
  },
}
