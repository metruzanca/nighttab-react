import { BookmarkGroup, Instance as InstanceType, State} from 'types'
import packagejson from "../../package.json";

/*
    __      __._____________ 
   /  \    /  \   \______   \
   \   \/\/   /   ||     ___/
    \        /|   ||    |    
     \__/\  / |___||____|                 

  Heavily work in progress. Not safe to use to generate new instances of nighttab
*/

/*
  nighttab: boolean
  version: number
  state: State
  bookmarks: Array<BookmarkGroup>
*/

// Yay for prototypes
export function Instance(this: InstanceType){
  this.nighttab = nighttab()
  this.version = version()
  //@ts-ignore
  this.state = state()
  //@ts-ignore
  this.bookmarks = bookmarks()
}

// TODO nighttab: boolean... What was this for again?
function nighttab(){
  return true
}

// TODO get version from package.json
function version(){
  return packagejson.version
}

/*
  edit: boolean
  pagelock: boolean
  shade: boolean
  edge: boolean
  search: boolean
  menu: boolean
  modal: boolean
  dropdown: boolean
  autoSuggest: boolean
  
  header: Header
  link: Link
  group: Group
  layout: Layout
  theme: Theme
  background: Background
*/

function state(): State{
  //@ts-ignore
  return {
    pagelock: true,
    edge: true,
    search: true,
    menu: true,
    modal: true,
    dropdown: true,
    autoSuggest: true,

  }
}

// persistance
//@ts-ignore
function bookmarks(): Array<BookmarkGroup>{

}