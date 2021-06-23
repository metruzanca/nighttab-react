// Man this file is repetitive...

import {
  Layout,
  LayoutAlignment,
  LayoutDirection,
  LayoutOrder,
  LayoutScrollbars,
  PayloadAction,
  Reducer
} from "types"


// Actions
export const layoutScope = 'settings/layout'
type layoutScope = typeof layoutScope

type SET_ALIGNMENT =  `${layoutScope}/SET_ALIGNMENT`
type setAlignment = PayloadAction<SET_ALIGNMENT, LayoutAlignment>

type SET_AREA_WIDTH =  `${layoutScope}/SET_AREA_WIDTH`
type setAreaWidth = PayloadAction<SET_AREA_WIDTH, number>

type SET_GUTTER =  `${layoutScope}/SET_GUTTER`
type setGutter = PayloadAction<SET_GUTTER, number>

type SET_SCALE_SIZE =  `${layoutScope}/SET_SCALE_SIZE`
type setScaleSize = PayloadAction<SET_SCALE_SIZE, number>

type SET_PADDING =  `${layoutScope}/SET_PADDING`
type setPadding = PayloadAction<SET_PADDING, number>

type SET_STACK_ALIGNMENT =  `${layoutScope}/SET_STACK_ALIGNMENT`
type setStackAlignment = PayloadAction<SET_STACK_ALIGNMENT, LayoutDirection>

type SET_STACK_ORDER =  `${layoutScope}/SET_STACK_ORDER`
type setStackOrder = PayloadAction<SET_STACK_ORDER, LayoutOrder>

type SET_PAGE_TITLE =  `${layoutScope}/SET_PAGE_TITLE`
type setPageTitle = PayloadAction<SET_PAGE_TITLE, string>

type SET_PAGE_SCROLL_PAST =  `${layoutScope}/SET_PAGE_SCROLL_PAST`
type setPageScrollPast = PayloadAction<SET_PAGE_SCROLL_PAST, boolean>

type SET_SCROLLBAR_STYLE =  `${layoutScope}/SET_SCROLLBAR_STYLE`
type setScrollbarStyle = PayloadAction<SET_SCROLLBAR_STYLE, LayoutScrollbars>


export type ActionTypes =
| setScaleSize
| setAreaWidth
| setAlignment
| setStackAlignment
| setStackOrder
| setPadding
| setGutter
| setPageTitle
| setPageScrollPast
| setScrollbarStyle


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

export const layoutReducer: Reducer<typeof defaultState, ActionTypes> = (
  state = defaultState, action
) => {
  switch (action.type) {
    case "settings/layout/SET_ALIGNMENT": return {
      ...state,
      alignment: action.payload,
    }
    case "settings/layout/SET_AREA_WIDTH": return {
      ...state,
      width: action.payload,
    }
    case "settings/layout/SET_GUTTER": return {
      ...state,
      gutter: action.payload,
    }
    case "settings/layout/SET_PADDING": return {
      ...state,
      padding: action.payload,
    }
    case "settings/layout/SET_PAGE_SCROLL_PAST": return {
      ...state,
      scrollPastEnd: action.payload,
    }
    case "settings/layout/SET_PAGE_TITLE": return {
      ...state,
      title: action.payload,
    }
    case "settings/layout/SET_SCALE_SIZE": return {
      ...state,
      size: action.payload,
    }
    case "settings/layout/SET_SCROLLBAR_STYLE": return {
      ...state,
      scrollbars: action.payload,
    }
    case "settings/layout/SET_STACK_ALIGNMENT": return {
      ...state,
      direction: action.payload,
    }
    case "settings/layout/SET_STACK_ORDER": return {
      ...state,
      order: action.payload,
    }
    default: return state
  }
}


// Action Creators
export const layoutActions = {
  setScaleSize(size: number): setScaleSize {
    return { type: "settings/layout/SET_SCALE_SIZE", payload: size }
  },
  setAreaWidth(width: number): setAreaWidth {
    return { type: "settings/layout/SET_AREA_WIDTH", payload: width }
  },
  setAlignment(alignment: LayoutAlignment): setAlignment {
    return { type: "settings/layout/SET_ALIGNMENT", payload: alignment }
  },
  setStackAlignment(direction: LayoutDirection): setStackAlignment {
    return { type: "settings/layout/SET_STACK_ALIGNMENT", payload: direction }
  },
  setStackOrder(order: LayoutOrder): setStackOrder {
    return { type: "settings/layout/SET_STACK_ORDER", payload: order }
  },
  setPadding(padding: number): setPadding {
    return { type: "settings/layout/SET_PADDING", payload: padding }
  },
  setGutter(gutter: number): setGutter {
    return { type: "settings/layout/SET_GUTTER", payload: gutter }
  },
  setPageTitle(title: string): setPageTitle {
    return { type: "settings/layout/SET_PAGE_TITLE", payload: title }
  },
  setPageScrollPast(scrollPast: boolean): setPageScrollPast {
    return { type: "settings/layout/SET_PAGE_SCROLL_PAST", payload: scrollPast }
  },
  setScrollbarStyle(style: LayoutScrollbars): setScrollbarStyle {
    return { type: "settings/layout/SET_SCROLLBAR_STYLE", payload: style }
  },
}
