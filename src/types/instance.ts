import { State, BookmarkGroup } from ".";

export interface Instance {
  // Why?
  // I found the reason, but I forgot it. Hello future me! 👋
  nighttab: boolean
  version: string
  state: State
  bookmarks: Array<BookmarkGroup>
}