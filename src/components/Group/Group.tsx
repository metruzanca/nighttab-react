import React from "react"
import {
  Body,
  Control,
  Header,
  Name,
  Wrapper,
  MoveUp,
  Drag,
  MoveDown,
  Edit,
  Delete,
} from "./styles"

type Props = {}

export const Group: React.FC<Props> = ({children}) => {

  return (
    <Wrapper>
      <Header>
        <Control>
          <MoveUp/>
          <Drag/>
          <MoveDown/>
          <Edit/>
          <Delete/>
        </Control>
        <Name>Group Name Goes Here</Name>
      </Header>
      <Body>
        {children}
      </Body>
    </Wrapper>
  )
}