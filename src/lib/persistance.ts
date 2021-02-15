import { Instance } from "types"

// TODO give this a better name
type PersistanceType =| "localstorage" | "selfhosted" | "nighttab-servers"

export interface Persistance {
  save: (data: object) => void
  load: () => Instance
}

// Kind of like Dependency Injection, but more "Dependency Selection".
// This probably needs to be changed to be more flexible
// This feels like a codesmell but idk how to achieve DI in js in a way
// to not require rebuilding the app to change the Persistance object
// It might be that we'll need a persistance.js file to be in as-is in the final bundle
// and provide a series of persistance.js files that can be swapped in.
// This might get messy.
export function Persistance(type:PersistanceType): Persistance{
  switch(type){
    default:
    case "localstorage": return {
      save: (data) => {
        try {
          localStorage.setItem("nighttab", JSON.stringify(data))
        } catch (error) {
          console.error(error)
          // handle telling user maybe? Or try again? This shouldn't ever fail...
          //...unless their config is bigger than 5MB (5000000 chars)
        }
      },
      //@ts-ignore //TODO need to make load return a valid instance
      load: () => {
        const instanceStr = localStorage.getItem("nighttab")
        if (instanceStr) {
          // TODO potentially trycatch parsing for "corrupted" config
          return <Instance>JSON.parse(instanceStr)
        } else {
          // TODO handle creating new default config
        }
      },
    }
    // Communicates with our servers, once we get ssr working.
    case "nighttab-servers": return {
      save: (data) => {
        
      },
      //@ts-ignore //TODO need to make load return a valid instance
      load: () => {

      },
    }
    // Make this communicate with a specific API thats well documented.
    case "selfhosted": return {
      save: (data) => {
        
      },
      //@ts-ignore //TODO need to make load return a valid instance
      load: () => {

      },
    }
  }
}