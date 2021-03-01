import React from "react"
import { Wrapper } from "./styles"

import { Header as HeaderType } from "types"
import { headerElements } from "./components"

interface Props {
  config: HeaderType
}

export const Header: React.FC<Props> = ({
  config: { order }
}) => {

  const elements = reorder(order, headerElements)

  return (
    <Wrapper>
      {elements}
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