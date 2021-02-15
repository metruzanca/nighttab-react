import React from "react"
import {
  Back,
  Control,
  Delete,
  DisplayName,
  Drag,
  Edit,
  Front,
  Icon,
  MoveLeft,
  MoveRight,
  Url,
  Wrapper,
} from "./styles"

type Props = {
  editing: boolean
}

export const LinkItem: React.FC<Props> = ({
  editing = false,
}) => {

  return (
    <Wrapper>
      <Front href="">
        <div>
          <Icon></Icon>
          <DisplayName></DisplayName>
        </div>
      </Front>
      <Back>
        <Url>
          <p></p>
        </Url>
        <Control editing={editing}>
          <MoveLeft></MoveLeft>
          <Drag></Drag>
          <MoveRight></MoveRight>
          <Edit></Edit>
          <Delete></Delete>
        </Control>
      </Back>
    </Wrapper>
  )
}