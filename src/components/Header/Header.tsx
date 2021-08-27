import React, { useState } from "react"
import { Wrapper } from "./styles"

import { Header as HeaderType } from "types"
import { ColorAccent, EditAdd, headerElements, Menu, MenuProps } from "./components"
import { Modal } from "components/Modal"
import { Debug } from "components/Debug"
import { ModalPosition } from "components/Modal/styles"
import { useSelector } from "react-redux"
import { RootState } from "store/ducks"

interface Props extends MenuProps {
}

export const Header: React.FC<Props> = ({
  setOpen,
}) => {
  const header = useSelector<RootState, HeaderType>(state => state.state.header)
  const Debug = useDebug()

  // These are here because these have handlers that need to be passed to them.
  headerElements.set("coloraccent", <ColorAccent/>)
  headerElements.set("editadd", <EditAdd/>)
  headerElements.set("menu", <Menu setOpen={setOpen}/>)

  const elements = reorder(header.order, headerElements)

  return (
    <Wrapper>
      {elements}
      {Debug}
    </Wrapper>
  )
}

function reorder(order:string[], components:Map<string, React.ReactNode>){
  const ordered:React.ReactNode[] = []
  order.forEach(item => {
    const comp = components.get(item)
    ordered.push(comp)
  })
  return ordered
}


// Eventually this will moved elsewhere, maybe.
function useDebug() {
  const [debug, setDebug] = useState(false)
  if(process.env.NODE_ENV === 'development' || true){
    return (
      <>
        <button onClick={() => setDebug(true)}>Debug</button>
        {debug && (
          <Modal closeMenu={() => setDebug(false)} position={ModalPosition.right}>
            <Debug/>
          </Modal>
        )}
      </>
    )
  }
  return null
}