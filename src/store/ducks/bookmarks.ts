import { Action, BookmarkGroup, BookmarkItem, PayloadAction, Reducer } from "types"

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
type createBookmark = PayloadAction<CREATE_BOOKMARK, {
  bookmark: BookmarkItem,
  group: number,
  index: number,
}>
type EDIT_BOOKMARK = `${scope}/EDIT_BOOKMARK`
type editBookmark = PayloadAction<EDIT_BOOKMARK, {
  bookmark: BookmarkItem,
  group: number,
  index: number,
}>
type DELETE_BOOKMARK = `${scope}/DELETE_BOOKMARK`
type deleteBookmark = PayloadAction<DELETE_BOOKMARK, {
  group: number,
  index: number,
}>

type MOVE_BOOKMARK = `${scope}/MOVE_BOOKMARK`
type moveBookmark = PayloadAction<MOVE_BOOKMARK, {
  group: number,
  from: number,
  to: number,
}>


type ActionTypes =
| init
| createGroup
| editGroup
| deleteGroup
| moveGroup
| createBookmark
| editBookmark
| deleteBookmark
| moveBookmark


// Reducer
export type bookmarksState = BookmarkGroup[]

const defaultState: bookmarksState = []

export const bookmarksReducer: Reducer<bookmarksState, ActionTypes> = (
  state = defaultState, action
) => {
  switch (action.type) {
    // Groups
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
    case "bookmarks/MOVE_GROUP": {
      const newState = [
        ...state,
      ]
      const [group] = newState.splice(action.payload.from, 1)
      newState.splice(action.payload.to, 0, group)
      return newState
    }
    // Bookmarks
    case 'bookmarks/CREATE_BOOKMARK': {
      const index = action.payload.index === -1
        ? state.length
        : action.payload.index
      // TODO ramda here, this spread is not creating new objects for the nested children
      // bad practice
      const newState = [
        ...state,
      ]
      newState[action.payload.group].items.splice(index, 0, action.payload.bookmark)
      return newState
    }
    case 'bookmarks/EDIT_BOOKMARK': {
      // TODO Ramda again
      // return state.map((group, groupIndex) => {
      //   if(groupIndex === action.payload.group) {
      //     return {
      //       ...group,
      //       items: group.items.map((item, itemIndex) => {
      //         if(itemIndex === action.payload.index) {
      //           // TODO nope nop nope. Gotta wait for Ramda to merge these...
      //         }
      //         return item
      //       })
      //     }
      //   }
      //   return group
      // })
      console.error(`EDIT_BOOKMARK is a work in progress... ¯\\_(ツ)_/¯`)
      return state
    }
    case 'bookmarks/DELETE_BOOKMARK': {
      return state.map((group, groupIndex) => {
        if(groupIndex === action.payload.group) {
          return {
            ...group,
            items: group.items.map((item, itemIndex) => {
              if(itemIndex === action.payload.index) {
                // TODO nope nop nope. Gotta wait for Ramda to merge these...
              }
              return item
            })
          }
        }
        return group
      })
    }
    // TODO handle moving bookmark between groups
    // TODO handle various errors like moving group outside array size
    case 'bookmarks/MOVE_BOOKMARK': {

      return state
    }
    default: return state
  }
}

// Not sure if this is the most logical location for this
const newGroup: BookmarkGroup = {
  name: {
    show: true,
    text: "",
  },
  openAll: {
    show: true
  },
  items: [],
}

const newBookmark: BookmarkItem = {
  "display": {
    "direction": "vertical",
    "order": "visualname",
    "alignment": "centercenter",
    "gutter": 2,
    "rotate": 0,
    "translate": {
      "x": 0,
      "y": 0
    },
    "visual": {
      "show": true,
      "type": "letter",
      "letter": {
        "size": 3,
        "text": ""
      },
      "image": {
        "size": 4,
        "url": ""
      },
      "icon": {
        "size": 3,
        "name": "",
        "prefix": "",
        "label": ""
      },
      "shadow": {
        "size": 0
      }
    },
    "name": {
      "show": true,
      "text": "",
      "size": 0.9
    }
  },
  "url": "",
  "accent": {
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
    },
    "opacity": 1
  },
  "wide": false,
  "tall": false,
  "searchMatch": false,
  "timeStamp": 1623971654999,
  "background": {
    "show": false,
    "type": "video",
    "opacity": 1,
    "image": {
      "url": ""
    },
    "video": {
      "url": ""
    }
  }
}

// Action Creators
export const bookmarksActions = {
  init (): init {
    return { type: "bookmarks/INIT" }
  },

  // Groups
  createGroup (group: Omit<BookmarkGroup, 'items'> = newGroup, index: number = -1): createGroup {
    return {
      type: "bookmarks/CREATE_GROUP",
      payload: { group: { ...group, items: [] }, index }
    }
  },
  deleteGroup (index: number): deleteGroup {
    return { type: "bookmarks/DELETE_GROUP", payload: index }
  },
  editGroup (group: Partial<BookmarkGroup>, index: number): editGroup {
    return { type: "bookmarks/EDIT_GROUP", payload: { group, index } }
  },
  moveGroup (from: number, to: number): moveGroup {
    return { type: "bookmarks/MOVE_GROUP", payload: { from, to } }
  },

  // Bookmarks
  // TODO BookmarkItem probably should be partial
  createBookmark (
    bookmark: BookmarkItem = newBookmark,
    group: number = 0,
    index: number = -1
  ): createBookmark {
    return { type: "bookmarks/CREATE_BOOKMARK", payload: { bookmark, group, index } }
  },
  editBookmark (
    bookmark: BookmarkItem,
    group: number = 0,
    index: number
  ): editBookmark {
    return { type: 'bookmarks/EDIT_BOOKMARK', payload: { bookmark, group, index } }
  },
  deleteBookmark (
    group: number,
    index: number
  ): deleteBookmark {
    return { type: "bookmarks/DELETE_BOOKMARK", payload: { group, index } }
  },
  moveBookmark (
    group: number,
    from: number,
    to: number
  ): moveBookmark {
    return { type: "bookmarks/MOVE_BOOKMARK", payload: { group, from, to } }
  },
}
