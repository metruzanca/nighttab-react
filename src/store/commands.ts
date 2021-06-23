import { actions } from "./ducks"
import { Dispatch } from "redux"
import { BookmarkGroup, Layout, LayoutAlignment, LayoutDirection, LayoutOrder, LayoutScrollbars } from "types"

declare global {
  interface Window {
    App: {
      [action: string] : (...args: any[]) => void
    }
  }
}

// These functions define the plugin API as well as console commands
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
    // Settings/Layout
    updateLayout(payload: Partial<Layout>) {
      dispatch(actions.settings.updateLayout(payload))
    },
  }
}