import { combineReducers } from 'redux'
import { bookmarksReducer, bookmarksActions} from './bookmarks'
import { editReducer, editActions} from './edit'


export const reducers = combineReducers({
  bookmarks: bookmarksReducer,
  edit: editReducer,
})

export const actions = {
  bookmarks: bookmarksActions,
  edit: editActions,
}