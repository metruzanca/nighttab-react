import { Action, Reducer } from "types"


// Actions
type scope = 'bookmarks'
type INIT =  `${scope}/INIT`
type init = Action<INIT>

type CREATE_GROUP = `${scope}/CREATE_GROUP`
type createGroup = Action<CREATE_GROUP>
type EDIT_GROUP = `${scope}/EDIT_GROUP`
type editGroup = Action<EDIT_GROUP>
type DELETE_GROUP = `${scope}/DELETE_GROUP`
type deleteGroup = Action<DELETE_GROUP>

type CREATE_BOOKMARK = `${scope}/CREATE_BOOKMARK`
type createBookmark = Action<CREATE_BOOKMARK>
type EDIT_BOOKMARK = `${scope}/EDIT_BOOKMARK`
type editBookmark = Action<EDIT_BOOKMARK>
type DELETE_BOOKMARK = `${scope}/DELETE_BOOKMARK`
type deleteBookmark = Action<DELETE_BOOKMARK>

// TODO handle change bookmark order or move to another group
// TODO handle group order change

type ActionTypes =
| init
| createGroup
| editGroup
| deleteGroup
| createBookmark
| editBookmark
| deleteBookmark


// Reducer
const defaultState = {}

export const bookmarksReducer: Reducer<ActionTypes, typeof defaultState> = (
  state = defaultState, action
) => {
  switch (action.type) {
    case "bookmarks/CREATE_BOOKMARK":
    default: return state
  }
}


// Action Creators
export const bookmarksActions = {
  init (): init {
    return { type: "bookmarks/INIT", payload: undefined }
  },
  createBookmark (): Action<CREATE_BOOKMARK> {
    return { type: "bookmarks/CREATE_BOOKMARK", payload: undefined }
  },
}