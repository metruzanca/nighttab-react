/**
 * Defines a map of action creators
 * > The maps are created here to avoid having to tediously create them later
 *   when creating the App object thats available globally.
 */
export type Action<T extends string, P = undefined> = { type: T, payload: P }

/**
 * Defines a classic redux reducer, but with code-completion
 */
export type Reducer<A extends Action<any, any>, S> = (state: S, action: A) => S

// type CREATE_BOOKMARK = `CREATE_BOOKMARK`
// type createBookmark = Action<CREATE_BOOKMARK, {data:'hello'}>

// type NOOP = `NOOP`
// type noop = Action<NOOP>

// type types = createBookmark | noop

// const bookmarksReducer: Reducer<types, {data?: string}> = (state = {}, action) => {
//   switch (action.type) {
//     case "CREATE_BOOKMARK": return {
//       data: action.payload.data
//     }
//     case "NOOP": return {
//       data: action.payload
//     }
//     default: return state
//   }
// }

