import { Action, PayloadAction, Reducer } from "types"


// Actions
type miscScope = 'settings/misc'
type UPDATE_MISC_SETTINGS =  `${miscScope}/UPDATE_MISC_SETTINGS`
type updateMiscSettings = Action<UPDATE_MISC_SETTINGS>

export type MiscTypes =
| updateMiscSettings


// Reducer
const defaultState = {}

/**This reducer handles some settings which are not scoped correctly */
export const miscReducer: Reducer<typeof defaultState, MiscTypes> = (
  state = defaultState, action
) => {
  switch (action.type) {
    default: return state
  }
}


// Action Creators
export const miscActions = {

}
