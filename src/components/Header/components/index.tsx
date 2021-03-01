import {Clock} from './Clock'
import {ColorAccent} from './ColorAccent'
import {Date} from './Date'
import {EditAdd} from './EditAdd'
import {Greeting} from './Greeting'
import {Menu} from './Menu'
import {SearchBar} from './SearchBar'
import {Transitional} from './Transitional'

// If you add something to this list, put it in alphabetical order
export const headerElements = new Map<string, React.ReactNode>([
  ["clock", <Clock/>],
  ["coloraccent", <ColorAccent/>],
  ["date", <Date/>],
  ["editadd", <EditAdd/>],
  ["greeting", <Greeting/>],
  ["menu", <Menu/>],
  ["searchbar", <SearchBar/>],
  ["transitional", <Transitional/>],
])