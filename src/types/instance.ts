import { Settings, BookmarkGroup } from ".";

export interface Instance {
  // Why?
  // I found the reason, but I forgot it. Hello future me! 👋
  nighttab: boolean
  version: string
  state: Settings
  bookmarks: Array<BookmarkGroup>
  edit: {
    editing: boolean
  }
}