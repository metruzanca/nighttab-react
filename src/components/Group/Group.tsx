import React from "react"
import { v4 as uuid } from 'uuid';

import {BookmarkGroup} from 'types'
import { LinkItem } from "components"

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

interface Props extends BookmarkGroup {
  editing: boolean
}

export const Group: React.FC<Props> = ({
  items,
  name,
  openAll,
  editing,
}) => {

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
        {/* @zombiefox, this is a great example of where we can do things directly
            via react instead of using name.show to set a display: none
        */}
        {name.show && <Name>{name.text}</Name>}
      </Header>
      <Body>
        {items.map(itemProps => 
          <>
            {console.log("item", itemProps)}
            <LinkItem editing={editing} key={uuid()} {...itemProps}/>
          </>
        )}
      </Body>
    </Wrapper>
  )
}