import { Group, PayloadAction, Reducer } from "types"


// Actions
type scope = 'settings/group'
type UPDATE_GROUP =  `${scope}/UPDATE_GROUP`
type updateGroup = PayloadAction<UPDATE_GROUP, Partial<Group>>

export type GroupTypes = updateGroup

// Reducer
export const defaultGroup: Group = {
  "area": {
    "justify": "left"
  },
  "name": {
    "show": true,
    "size": 1
  },
  "openAll": {
    "show": true,
    "size": 1,
    "opacity": 1
  },
  "border": 0,
  "order": "headerbody",
  "add": false,
  "edit": false
}


export const groupReducer: Reducer<Group, updateGroup> = (
  state = defaultGroup, action
) => {
  switch (action.type) {
    case "settings/group/UPDATE_GROUP":
    default: return state
  }
}


// Action Creators
export const groupActions = {
  updateGroup (group: Partial<Group>): updateGroup {
    return { type: "settings/group/UPDATE_GROUP", payload: group }
  },
}
