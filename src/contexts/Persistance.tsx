import { Persistance } from "lib";
import { createContext, useState } from "react";

export const PersistanceContext = createContext<Persistance>({
  //@ts-ignore This temporary value doesn't exist long enough
  // to justify making load have a valid value
  load: () => {/* Valid instance goes here*/},
  save: () => {}
})
export const PersistanceProvider: React.FC = ({children}) => {
  

  return (
    <PersistanceContext.Provider value={{
      ...Persistance("localstorage")
      //TODO replace with an enviroment variable
      // Though... would be nice to not have to recompile the react app for selfhosting...
      // Look into this. But for now, this works.
    }}>
      {children}
    </PersistanceContext.Provider>
  )
}