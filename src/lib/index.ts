import { Instance } from "types"

// TODO give this a better name
type PersistanceType =| "localstorage" | "selfhosted" | "nighttab-servers"

export interface Persistance {
  save: (data: any) => void
  load: () => Instance
}

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