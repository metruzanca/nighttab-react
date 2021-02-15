import { useConstructor } from "hooks";
import { Persistance } from "lib";
import { createContext, useRef } from "react";
import { Instance } from "types";


interface ConfigContext {
  config: Instance
  save: (data:object) => void
}

export const ConfigContext = createContext<ConfigContext>({
  // @ts-ignore This temporary value doesn't exist long enough
  // to justify making load have a valid value
  config: {/* Valid instance goes here*/},
  save: () => {}
})
export const ConfigProvider: React.FC = ({children}) => {
  // NB: Both Persistance, useConstructor are syncronous and the value is stored in a ref
  //     resulting this logic only excuting on app load. 
  const persist = Persistance("localstorage")
  const instance = useRef<Instance>()
  useConstructor(() => {
    const nighttab = persist.load()
    instance.current = nighttab
  })

  if(!instance){
    // instance.current = new Instance()
    // This path shouldn't even be necessary as load's job is to load
    // or create a new Instance if one is not found
  }

  return (
    <ConfigContext.Provider value={{
      //@ts-ignore Remove this ignore once creating a new nighttab instance has been done
      config: instance.current,
      save: persist.save,
    }}>
      {children}
    </ConfigContext.Provider>
  )
}