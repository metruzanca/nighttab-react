import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "./ducks"
import registerCommands from './commands'
import { Persistance, persistanceMiddleware } from 'lib';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

const persist = Persistance("localstorage")

const store = createStore(
  rootReducer,
  persist.load(),
  composeEnhancers(
    applyMiddleware(
      persistanceMiddleware(persist)
    ),
    // other store enhancers if any
  ),
)

export default store

registerCommands(store.dispatch)