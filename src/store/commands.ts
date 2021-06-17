import { actions } from "./ducks"
import { Dispatch } from "redux"
import { BookmarkGroup } from "types"

declare global {
  interface Window {
    App: {
      [action: string] : (...args: any[]) => void
    }
  }
}

export default function registerCommands(dispatch: Dispatch) {
  window.App = {
    // Edit mode
    setEditing(isEditing: boolean) {
      dispatch(actions.edit.setEditing(isEditing))
    },
    toggleEditing() {
      dispatch(actions.edit.toggle())
    },
    // Bookmark Groups
    createGroup(group: BookmarkGroup) { 
      dispatch(actions.bookmarks.createGroup(group))
    },
    deleteGroup(index: number) {
      dispatch(actions.bookmarks.deleteGroup(index))
    },
    editGroup(group: Partial<BookmarkGroup>, index: number) {
      dispatch(actions.bookmarks.editGroup(group, index))
    },
    moveGroup(from: number, to: number) {
      dispatch(actions.bookmarks.moveGroup(from, to))
    },
    // Bookmarks
    createBookmark() {
      dispatch(actions.bookmarks.createBookmark())
    },
  }
}