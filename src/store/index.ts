import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension';
import { rootReducer } from "./ducks"
import registerCommands from './commands'
import { Persistance } from 'lib';

const store = createStore(
  rootReducer,
  Persistance("localstorage").load(),
  devToolsEnhancer({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  })
)

export default store

registerCommands(store.dispatch)