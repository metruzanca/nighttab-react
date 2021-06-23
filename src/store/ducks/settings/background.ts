import { Background, PayloadAction, Reducer } from "types"


// Actions
type scope = 'settings/background'
type UPDATE_BACKGROUND =  `${scope}/UPDATE_BACKGROUND`
type updateBackground = PayloadAction<UPDATE_BACKGROUND, Partial<Background>>

export type BackgroundTypes = updateBackground


// Reducer
export const defaultBackground: Background = {
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
}


export const backgroundReducer: Reducer<Background, updateBackground> = (
  state = defaultBackground, action
) => {
  switch (action.type) {
    case "settings/background/UPDATE_BACKGROUND": return {
      ...state,
      ...action.payload,
    }
    default: return state
  }
}


// Action Creators
export const backgroundActions = {
  updateBackground (background: Partial<Background>): updateBackground {
    return { type: "settings/background/UPDATE_BACKGROUND", payload: background }
  },
}
