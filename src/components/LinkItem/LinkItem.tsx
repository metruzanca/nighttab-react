import React from "react"
import { Icons } from "styles"
import { BookmarkItem, VisualElement } from "types"
import {
  Wrapper,
  Front,
  Display,
  DisplayName,
  DisplayLetter,
  DisplayIcon,
  DisplayImage,
  Background,
  Back,
  Url,
  UrlText,
  Control,
  MoveLeft,
  Drag,
  MoveRight,
  Edit,
  Delete,
} from "./styles"


const DisplayElement: React.FC<VisualElement> = ({
  shadow,
  ...props
}) => {
  switch (props.type) {
    case 'letter': return (
      <DisplayLetter size={props.letter.size}>
        {props.letter.text}
      </DisplayLetter>
    )
    case 'icon': return (
      <DisplayIcon>
        {/* TODO font awesome */}
        {/* Size might have to a wrapper here, otherwise things might get messy */}
      </DisplayIcon>
    )
    case 'image': return (
      <DisplayImage
        size={props.image.size}
        url={props.image.url}
      />
    )
  }
}

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
    },
    visual,
    order
  }
}) => {

  const displayElement = visual.show ? (
    <DisplayElement {...visual}/>
  ) : null

  const displayName = showDisplayName ? (
    <DisplayName size={sizeDisplayName}>
      {textDisplayName}
    </DisplayName>
  ) : null

  return (
    <Wrapper>

      <Front href="">
        <Display>
          {order === 'visualname' ? (
            <>
              {displayElement}
              {displayName}
            </>
          ): (
            <>
              {displayName}
              {displayElement}
            </>
          )}
        </Display>

        { false && (
          <Background/>
        )}
      </Front>

      <Back>
        <Url>
          <UrlText></UrlText>
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