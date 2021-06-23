import {
  Layout,
  PayloadAction,
  Reducer
} from "types"


// Actions
export const layoutScope = 'settings/layout'
type layoutScope = typeof layoutScope

type UPDATE_LAYOUT =  `${layoutScope}/UPDATE_LAYOUT`
type updateLayout = PayloadAction<UPDATE_LAYOUT, Partial<Layout>>


// Reducer
const defaultState: Layout = {
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

export const layoutReducer: Reducer<typeof defaultState, updateLayout> = (
  state = defaultState, action
) => {
  if(action.type === "settings/layout/UPDATE_LAYOUT") {
    return {
      ...state,
      ...action.payload,
    }
  }
  return state
}


// Action Creators
export const layoutActions = {
  updateLayout(payload: Partial<Layout>): updateLayout {
    return { type: "settings/layout/UPDATE_LAYOUT", payload }
  },
}
