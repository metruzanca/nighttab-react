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
import { Icons } from "styles";
import { EditState } from "store/ducks/edit";

interface Props extends BookmarkGroup, EditState {}

export const Group: React.FC<Props> = ({
  items,
  name,
  openAll,
  editing,
}) => {

  return (
    <Wrapper>
      <Header>
        {editing && (
          <Control>
            <MoveUp>
              {Icons.UpArrow}
            </MoveUp>
            <Drag>
              {Icons.Drag}
            </Drag>
            <MoveDown>
              {Icons.DownArrow}
            </MoveDown>
            <Edit>
              {Icons.Edit}
            </Edit>
            <Delete>
              {Icons.Delete}
            </Delete>
          </Control>
        )}
        {/* @zombiefox, this is a great example of where we can do things directly
            via react instead of using name.show to set a display: none
        */}
        {name.show && <Name>{name.text}</Name>}
      </Header>
      <Body>
        {items.map(itemProps => 
          <React.Fragment key={uuid()}>
            <LinkItem editing={editing} key={uuid()} {...itemProps}/>
          </React.Fragment>
        )}
      </Body>
    </Wrapper>
  )
}