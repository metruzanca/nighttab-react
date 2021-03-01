import React, { useState } from "react"
import { v4 as uuid } from 'uuid';

import { Item, Button, Subnav } from './styles'

interface MenuNavProps {
  items: Array<Items>
  onChange: (index: number) => void
  subMenu: number
}

export const MenuNav: React.FC<MenuNavProps> = ({
  items, onChange, subMenu
}) =>  (
  <div>
    {items.map((item, index) => (
      <MenuNavItem
        key={uuid()}
        sections={item.sections}
        onClick={() => onChange(index)}
        active={index === subMenu}
        title={item.title}
      />
    ))}
  </div>
)


export interface Items {
  sections: Array<Section>
  title: string
}

interface Section {
  name: string
  href: string
}

interface AccordionItemProps extends Items{
  active: boolean
  onClick: () => void
}

export const MenuNavItem: React.FC<AccordionItemProps> = ({
  active, sections, onClick, title
}) => (
  <Item>
    <Button onClick={onClick}>
      {title}
    </Button>
    <Subnav>
      {active && sections.map(s => (
        // probably use jump.js instead here.
        <a key={uuid()} href={s.href}>{s.name}</a>
      ))}
    </Subnav>
  </Item>
)
