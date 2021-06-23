import React, { useState } from "react"
import { v4 as uuid } from 'uuid';

import sections from './sections'
import {
  Wrapper,
  Item,
  Button,
  Subnav,
  MenuNav,
  MenuClose,
  MenuContent,
} from "./styles"

export const Menu: React.FC = ({
}) => {
  const [subMenu, setSubMenu] = useState(0)
  return (
    <Wrapper>
      <MenuNav>
        {sections.map((item, index) => (
          <MenuNavItem
            key={uuid()}
            subSections={item.subSections}
            onClick={() => setSubMenu(index)}
            active={index === subMenu}
            name={item.name}
          />
        ))}
      </MenuNav>
      <MenuClose>

      </MenuClose>
      <MenuContent>
        {sections[subMenu].component({})}
      </MenuContent>
    </Wrapper>
  )
}


export interface Items {
  name: string
  subSections: Array<{
    name: string
    hash: string
  }>
}

interface AccordionItemProps extends Items{
  active: boolean
  onClick: () => void
}

export const MenuNavItem: React.FC<AccordionItemProps> = ({
  active, subSections, onClick, name: title
}) => (
  <Item>
    <Button onClick={onClick}>
      {title}
    </Button>
    <Subnav>
      {active && subSections.map(s => (
        // probably use jump.js instead here.
        <a key={uuid()} href={s.hash}>{s.name}</a>
      ))}
    </Subnav>
  </Item>
)
