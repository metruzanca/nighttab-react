import {
  Layout,
  PayloadAction,
  Reducer
} from "types"


// Actions
type scope = 'settings/layout'

type UPDATE_LAYOUT =  `${scope}/UPDATE_LAYOUT`
type updateLayout = PayloadAction<UPDATE_LAYOUT, Partial<Layout>>

export type LayoutTypes = updateLayout


// Reducer
export const defaultLayout: Layout = {
  alignment: "centercenter",
  order: "headerlink",
  direction: "vertical",
  padding: 4,
  gutter: 2,
  size: 1,
  width: 80,
  scrollPastEnd: false,
  scrollbars: "auto",
  title: "",
}

export const layoutReducer: Reducer<Layout, updateLayout> = (
  state = defaultLayout, action
) => {
  switch (action.type) {
    case "settings/layout/UPDATE_LAYOUT": return {
      ...state,
      ...action.payload,
    }
    default: return state
  }
}


// Action Creators
export const layoutActions = {
  updateLayout(payload: Partial<Layout>): updateLayout {
    return { type: "settings/layout/UPDATE_LAYOUT", payload }
  },
}
