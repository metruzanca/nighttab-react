import { PayloadAction, Reducer, Theme } from "types"


// Actions
type scope = 'settings/theme'
type UPDATE_THEME =  `${scope}/UPDATE_THEME`
type updateTheme = PayloadAction<UPDATE_THEME, Partial<Theme>>

export type ThemeTypes = updateTheme

// Reducer
export const defaultTheme: Theme = {
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
}


export const themeReducer: Reducer<Theme, updateTheme> = (
  state = defaultTheme, action
) => {
  switch (action.type) {
    case "settings/theme/UPDATE_THEME":
    default: return state
  }
}


// Action Creators
export const themeActions = {
  init (theme: Partial<Theme>): updateTheme {
    return { type: "settings/theme/UPDATE_THEME", payload: theme }
  },
}
