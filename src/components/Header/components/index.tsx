import {Clock} from './Clock'
import {Date} from './Date'
import {Greeting} from './Greeting'
import {SearchBar} from './SearchBar'
import {Transitional} from './Transitional'

// If you add something to this list, put it in alphabetical order
export const headerElements = new Map<string, React.ReactNode>([
  ["clock", <Clock/>],
  ["date", <Date/>],
  ["greeting", <Greeting/>],
  ["searchbar", <SearchBar/>],
  ["transitional", <Transitional/>],
])

export * from './ColorAccent'
export * from './EditAdd'
export * from './Menu'