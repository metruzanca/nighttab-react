import { Action, BookmarkGroup, PayloadAction, Reducer } from "types"

// Actions
type scope = 'bookmarks'
type INIT =  `${scope}/INIT`
type init = Action<INIT>

type CREATE_GROUP = `${scope}/CREATE_GROUP`
type createGroup = PayloadAction<CREATE_GROUP, {
  group: BookmarkGroup,
  index: number,
}>
type EDIT_GROUP = `${scope}/EDIT_GROUP`
type editGroup = PayloadAction<EDIT_GROUP, {
  group: Partial<BookmarkGroup>,
  index: number,
}>
type DELETE_GROUP = `${scope}/DELETE_GROUP`
type deleteGroup = PayloadAction<DELETE_GROUP, number>
type MOVE_GROUP = `${scope}/MOVE_GROUP`
type moveGroup = PayloadAction<MOVE_GROUP, {
  from: number,
  to: number,
}>


type CREATE_BOOKMARK = `${scope}/CREATE_BOOKMARK`
type createBookmark = PayloadAction<CREATE_BOOKMARK, {name: string}>
type EDIT_BOOKMARK = `${scope}/EDIT_BOOKMARK`
type editBookmark = Action<EDIT_BOOKMARK>
type DELETE_BOOKMARK = `${scope}/DELETE_BOOKMARK`
type deleteBookmark = Action<DELETE_BOOKMARK>

// TODO handle moving bookmark between groups

type ActionTypes =
| init
| createGroup
| editGroup
| deleteGroup
| moveGroup
| createBookmark
| editBookmark
| deleteBookmark


// Reducer
export type bookmarksState = BookmarkGroup[]

const defaultState: bookmarksState = []

export const bookmarksReducer: Reducer<bookmarksState, ActionTypes> = (
  state = defaultState, action
) => {
  switch (action.type) {
    case "bookmarks/CREATE_GROUP": {
      const index = action.payload.index === -1
        ? state.length
        : action.payload.index
      const newState = [
        ...state,
      ]
      newState.splice(index, 0, action.payload.group)
      return newState
    }
    case 'bookmarks/DELETE_GROUP': {
      return state.filter((_, index) => index !== action.payload)
    }
    case "bookmarks/EDIT_GROUP": {
      return state.map((group, index) => {
        if(index === action.payload.index) {
          // TODO replace this mess below with Ramda
          return {
            items: group.items,
            name: {
              ...group.name,
              ...action.payload.group.name
            },
            openAll: {
              ...group.openAll,
              ...action.payload.group.openAll
            }
          }
        }
        return group
      })
    }
    // TODO handle moving group outside array size
    case "bookmarks/MOVE_GROUP": {
      const newState = [
        ...state,
      ]
      const [group] = newState.splice(action.payload.from, 1)
      newState.splice(action.payload.to, 0, group)
      return newState
    }
    default: return state
  }
}

// Not sure if this is the most logical location for this
const defaultNewGroup: BookmarkGroup = {
  name: {
    show: true,
    text: "",
  },
  openAll: {
    show: true
  },
  items: [],
}

// Action Creators
export const bookmarksActions = {
  init (): init {
    return { type: "bookmarks/INIT" }
  },

  // Groups
  createGroup (group: Omit<BookmarkGroup, 'items'> = defaultNewGroup, index: number = -1): createGroup {
    return {
      type: "bookmarks/CREATE_GROUP",
      payload: {
        group: { ...group, items: [] },
        index,
      }
    }
  },
  deleteGroup (index: number): deleteGroup {
    if(index === undefined) {
      throw new Error(`deleteGroup has missing args`)
    }
    return {
      type: "bookmarks/DELETE_GROUP",
      payload: index
    }
  },
  editGroup (group: Partial<BookmarkGroup>, index: number): editGroup {
    return {
      type: "bookmarks/EDIT_GROUP",
      payload: {
        group,
        index
      }
    }
  },
  moveGroup (from: number, to: number): moveGroup {
    return {
      type: "bookmarks/MOVE_GROUP",
      payload: {
        from,
        to,
      }
    }
  },

  // Bookmarks
  createBookmark (): createBookmark {
    return { type: "bookmarks/CREATE_BOOKMARK", payload: { name: 'test' } }
  },
}
