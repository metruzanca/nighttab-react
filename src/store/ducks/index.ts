import { combineReducers } from 'redux'
import { bookmarksReducer, bookmarksActions, bookmarksState } from './bookmarks'
import { editReducer, editActions, EditState } from './edit'
import { settingsReducer, settingsActions, settingsState } from "./settings";

export interface RootState {
  bookmarks: bookmarksState
  edit: EditState
  state: settingsState
}


export const rootReducer = combineReducers({
  bookmarks: bookmarksReducer,
  edit: editReducer,
  // to prevent breaking legacy nighttab configs, state is the name for settings
  // TODO make system for updating the schema automatically. (gonna need redux-thunk)
  state: settingsReducer,
})

export const actions = {
  bookmarks: bookmarksActions,
  edit: editActions,
  settings: settingsActions,
}