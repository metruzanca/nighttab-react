import React from "react"
import { Icons } from "styles"
import { BookmarkItem } from "types"
import {
  Wrapper,
  Front,
  Display,
  DisplayName,
  DisplayIcon,
  Background,
  Back,
  Url,
  Control,
  MoveLeft,
  Drag,
  MoveRight,
  Edit,
  Delete,
} from "./styles"

interface Props extends BookmarkItem {
  editing: boolean
}

export const LinkItem: React.FC<Props> = ({
  editing = false,
  display: {
    name: {
      show: showDisplayName,
      text: textDisplayName,
      size: sizeDisplayName,
    }
  }
}) => {

  return (
    <Wrapper>

      <Front href="">
        <Display>
          <DisplayIcon></DisplayIcon>
          { showDisplayName && (
            <DisplayName size={sizeDisplayName}>
              {textDisplayName}
            </DisplayName>
          )}
        </Display>

        { false && (
          <Background/>
        )}
      </Front>

      <Back>
        <Url>
          <p></p>
        </Url>

        <Control editing={editing}>
          <MoveLeft>
            {Icons.LeftArrow}
          </MoveLeft>
          <Drag>
            {Icons.Drag}
          </Drag>
          <MoveRight>
            {Icons.RightArrow}
          </MoveRight>
          <Edit>
            {Icons.Edit}
          </Edit>
          <Delete>
            {Icons.Delete}
          </Delete>
        </Control>

      </Back>
    </Wrapper>
  )
}