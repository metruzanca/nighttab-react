import { createContext, useState } from "react";

interface EditingContextProps {
  editing: boolean
  setEditing: (editing:boolean) => void
}

export const editingContext = createContext<EditingContextProps>({
  editing: false,
  setEditing: () => {}
})
export const EditingProvider: React.FC = ({children}) => {
  const [editing, setEditing] = useState(false)

  return (
    <editingContext.Provider value={{editing, setEditing}}>
      {children}
    </editingContext.Provider>
  )
}