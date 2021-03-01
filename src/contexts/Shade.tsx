import { createContext, useState } from "react";

interface ShadeContext {
  open: boolean;
  setOpen: (state:boolean) => void;
}

export const ShadeContext = createContext<ShadeContext>({
  open: false,
  setOpen: () => {}
})
export const ShadeProvider: React.FC = ({children}) => {
  
  const [open, setOpen] = useState(false)
  return (
    <ShadeContext.Provider value={{
      open, setOpen
    }}>
      {children}
    </ShadeContext.Provider>
  )
}