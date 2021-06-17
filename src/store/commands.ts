import { actions } from "./ducks"
import { Dispatch } from "redux"

declare global {
  interface Window {
    App: {
      [action: string] : (...args: any[]) => void
    }
  }
}

export default function registerCommands(dispatch: Dispatch) {
  window.App = {
    createBookmark() { dispatch(actions.bookmarks.createBookmark()) },
    setEditing(isEditing: boolean) { dispatch(actions.edit.setEditing(isEditing)) },
    toggleEditing() { dispatch(actions.edit.toggle()) },
  }
}