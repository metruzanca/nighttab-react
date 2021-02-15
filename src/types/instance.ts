import { State, Bookmark } from ".";

export interface Instance {
  // Why?
  nighttab: boolean
  version: number
  state: State
  bookmarks: Array<Bookmark>
}