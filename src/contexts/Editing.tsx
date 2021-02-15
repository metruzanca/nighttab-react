import { createContext, useState } from "react";

interface EditingContextProps {
  editing: boolean
  setEditing: (editing:boolean) => void
}

export const EditingContext = createContext<EditingContextProps>({
  editing: false,
  setEditing: () => {}
})
export const EditingProvider: React.FC = ({children}) => {
  const [editing, setEditing] = useState(false)

  return (
    <EditingContext.Provider value={{editing, setEditing}}>
      {children}
    </EditingContext.Provider>
  )
}

export interface Editable {
  editing: boolean
}

export function withEditing<T extends object>(Component:React.FC<T>) {
  const EditableComponent:React.FC<T & Editable> = (props) =>  (
    <EditingContext.Consumer>
      {({editing}) => <Component editing={editing} {...props as T}/>}
    </EditingContext.Consumer>
  )
  return EditableComponent
}