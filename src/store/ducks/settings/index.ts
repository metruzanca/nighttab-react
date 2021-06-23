/**
 * NOTE
 * For the time being the nested reducers correspond to the nested objects
 * which loosly correspond to settings menu sections.
 * 
 * In the future it would be nice to change the state to be either grouped
 * based on functionality or entirely based on settings (or something else).
 * 
 */

import { Action, Reducer, Settings } from "types"
import { backgroundReducer, BackgroundTypes, defaultBackground } from "./background"
import { defaultGroup, groupReducer, GroupTypes } from "./group"
import { defaultHeader, headerReducer, HeaderTypes } from "./header"
import {layoutReducer, layoutActions, defaultLayout, LayoutTypes} from './layout'
import { defaultLink, linkReducer, LinkTypes } from "./link"
import {miscReducer, miscActions, MiscTypes} from './misc'
import { defaultTheme, themeReducer, ThemeTypes } from "./theme"

// Actions
type scope = 'settings'
type INIT =  `${scope}/INIT`
type init = Action<INIT>

type ActionTypes =
| init
| LinkTypes
| HeaderTypes
| GroupTypes
| ThemeTypes
| BackgroundTypes
| LayoutTypes
| MiscTypes


// Reducer
export type settingsState = Settings

const defaultState: Settings = {
  header: defaultHeader,
  link: defaultLink,
  group: defaultGroup,
  layout: defaultLayout,
  theme: defaultTheme,
  background: defaultBackground,
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


export const settingsReducer: Reducer<settingsState, ActionTypes> = (
  state = defaultState, action
) => {

  return {
    ...state,
    ...miscReducer(state.layout, action as MiscTypes),
    layout: layoutReducer(state.layout, action as LayoutTypes),
    header: headerReducer(state.header, action as HeaderTypes),
    link: linkReducer(state.link, action as LinkTypes),
    group: groupReducer(state.group, action as GroupTypes),
    theme: themeReducer(state.theme, action as ThemeTypes),
    background: backgroundReducer(state.background, action as BackgroundTypes),
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
