import { Action, Reducer } from "types"


// Actions
type scope = 'edit'

type SET_EDITING =  `${scope}/SET_EDITING`
type setEditing = Action<SET_EDITING, boolean>
type TOGGLE_EDITING =  `${scope}/TOGGLE_EDITING`
type toggleEditing = Action<TOGGLE_EDITING>

type ActionTypes =
| setEditing
| toggleEditing


// Reducer
const defaultState = {
  editing: false
}

export const editReducer: Reducer<ActionTypes, typeof defaultState> = (
  state = defaultState, action
) => {
  switch (action.type) {
    case "edit/SET_EDITING": return {
      editing: action.payload
    }
    case 'edit/TOGGLE_EDITING': return {
      editing: !state.editing
    }
    default: return state
  }
}


// Action Creators
export const editActions = {
  setEditing (isEditing: boolean): setEditing {
    return { type: "edit/SET_EDITING", payload: isEditing }
  },
  toggle (): toggleEditing {
    return { type: "edit/TOGGLE_EDITING", payload: undefined }
  },
}
