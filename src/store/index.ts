import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension';
import { reducers } from "./ducks"
import registerCommands from './commands'

// TODO Persistance loading as default state
// might help https://redux.js.org/recipes/structuring-reducers/initializing-state

const store = createStore(
  reducers,
// Persistance.load(),
  devToolsEnhancer({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  })
)

export default store

registerCommands(store.dispatch)