import { actions } from "./ducks"
import { Dispatch } from "redux"
import { BookmarkGroup, LayoutAlignment, LayoutDirection, LayoutOrder, LayoutScrollbars } from "types"

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
    setScaleSize(size: number) {
      dispatch(actions.settings.setScaleSize(size))
    },
    setAreaWidth(width: number) {
      dispatch(actions.settings.setAreaWidth(width))
    },
    setAlignment(alignment: LayoutAlignment) {
      dispatch(actions.settings.setAlignment(alignment))
    },
    setStackAlignment(direction: LayoutDirection) {
      dispatch(actions.settings.setStackAlignment(direction))
    },
    setStackOrder(order: LayoutOrder) {
      dispatch(actions.settings.setStackOrder(order))
    },
    setPadding(padding: number) {
      dispatch(actions.settings.setPadding(padding))
    },
    setGutter(gutter: number) {
      dispatch(actions.settings.setGutter(gutter))
    },
    setPageTitle(title: string) {
      dispatch(actions.settings.setPageTitle(title))
    },
    setPageScrollPast(scrollPast: boolean) {
      dispatch(actions.settings.setPageScrollPast(scrollPast))
    },
    setScrollbarStyle(style: LayoutScrollbars) {
      dispatch(actions.settings.setScrollbarStyle(style))
    },
  }
}