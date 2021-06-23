import { AnyAction } from "redux"
import { Action, Reducer, Settings } from "types"
import {layoutScope, layoutReducer, layoutActions} from './layout'
import {miscScope, miscReducer, miscActions} from './misc'

// Actions
type scope = 'settings'
type INIT =  `${scope}/INIT`
type init = Action<INIT>

type ActionTypes =
| init


// Reducer
export type settingsState = Settings

const defaultState: Settings = {
  "header": {
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
  },
  "link": {
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
  },
  "group": {
    "area": {
      "justify": "left"
    },
    "name": {
      "show": true,
      "size": 1
    },
    "openAll": {
      "show": true,
      "size": 1,
      "opacity": 1
    },
    "border": 0,
    "order": "headerbody",
    "add": false,
    "edit": false
  },
  "layout": {
    "alignment": "centercenter",
    "order": "headerlink",
    "direction": "vertical",
    "padding": 4,
    "gutter": 2,
    "size": 1,
    "width": 80,
    "scrollPastEnd": false,
    "scrollbars": "auto",
    "title": ""
  },
  "theme": {
    "accent": {
      "hsl": {
        "h": 221,
        "s": 100,
        "l": 50
      },
      "rgb": {
        "r": 0,
        "g": 80,
        "b": 255
      },
      "random": {
        "active": false,
        "style": "any"
      },
      "cycle": {
        "active": false,
        "speed": 300,
        "step": 10
      }
    },
    "color": {
      "hsl": {
        "h": 222,
        "s": 14,
        "l": 56
      },
      "rgb": {
        "r": 129,
        "g": 138,
        "b": 160
      },
      "contrast": {
        "light": 4,
        "dark": 4
      },
      "generated": {
        "negative": {
          "1": {
            "r": 117,
            "g": 127,
            "b": 151
          },
          "2": {
            "r": 107,
            "g": 117,
            "b": 142
          },
          "3": {
            "r": 98,
            "g": 107,
            "b": 130
          },
          "4": {
            "r": 89,
            "g": 98,
            "b": 118
          },
          "5": {
            "r": 80,
            "g": 88,
            "b": 107
          },
          "6": {
            "r": 72,
            "g": 78,
            "b": 95
          },
          "7": {
            "r": 63,
            "g": 69,
            "b": 83
          },
          "8": {
            "r": 54,
            "g": 59,
            "b": 72
          },
          "9": {
            "r": 45,
            "g": 50,
            "b": 60
          },
          "10": {
            "r": 37,
            "g": 40,
            "b": 48
          }
        },
        "positive": {
          "1": {
            "r": 141,
            "g": 149,
            "b": 169
          },
          "2": {
            "r": 152,
            "g": 160,
            "b": 178
          },
          "3": {
            "r": 164,
            "g": 170,
            "b": 186
          },
          "4": {
            "r": 176,
            "g": 181,
            "b": 195
          },
          "5": {
            "r": 187,
            "g": 192,
            "b": 204
          },
          "6": {
            "r": 199,
            "g": 203,
            "b": 213
          },
          "7": {
            "r": 210,
            "g": 214,
            "b": 221
          },
          "8": {
            "r": 222,
            "g": 224,
            "b": 230
          },
          "9": {
            "r": 234,
            "g": 235,
            "b": 239
          },
          "10": {
            "r": 245,
            "g": 246,
            "b": 248
          }
        }
      }
    },
    "font": {
      "display": {
        "name": "",
        "weight": 400,
        "style": "normal"
      },
      "ui": {
        "name": "",
        "weight": 400,
        "style": "normal"
      }
    },
    "style": "dark",
    "radius": 0.25,
    "shadow": 0.75,
    "shade": {
      "opacity": 0.4
    },
    "custom": {
      "all": [],
      "edit": false
    }
  },
  "background": {
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
      }
    },
    "visual": {
      "show": false,
      "type": "video",
      "image": {
        "type": "file",
        "file": {
          "name": "",
          "data": ""
        },
        "url": ""
      },
      "video": {
        "url": ""
      },
      "blur": 0,
      "scale": 1,
      "opacity": 1,
      "grayscale": 0,
      "accent": 0,
      "vignette": {
        "opacity": 0,
        "start": 90,
        "end": 70
      }
    }
  },
  // "edit": false,
  "pagelock": false,
  "shade": false,
  "edge": false,
  "search": false,
  "menu": false,
  "modal": false,
  "dropdown": false,
  "autoSuggest": false
}

const scopedReducer = (
  state: any, action: AnyAction
) => (
  scope: string, reducer: Reducer<any, any>
  ) => {
    if(action.type.startsWith(scope)){
      //@ts-ignore action should be is type guarded here
      return reducer(state.layout, action)
    }
}

export const settingsReducer: Reducer<settingsState, ActionTypes> = (
  state = defaultState, action
) => {
  const nestedReduce = scopedReducer(state, action)

  return {
    ...state,
    ...nestedReduce(miscScope, miscReducer),
    layout: nestedReduce(layoutScope, layoutReducer),
  }
}


// Action Creators
export const settingsActions = {
  init (): init {
    return { type: "settings/INIT" }
  },
  ...layoutActions,
  ...miscActions,
}
