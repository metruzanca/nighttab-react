import { Action, PayloadAction, Reducer } from "types"


// Actions
export const miscScope = 'settings/misc'
type INIT =  `${typeof miscScope}/INIT`
type init = Action<INIT>

type ActionTypes =
| init


// Reducer
const defaultState = {}


export const miscReducer: Reducer<typeof defaultState, ActionTypes> = (
  state = defaultState, action
) => {
  switch (action.type) {
    default: return state
  }
}


// Action Creators
export const miscActions = {

}
