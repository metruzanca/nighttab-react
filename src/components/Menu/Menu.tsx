import React, { useState } from "react"
import { Wrapper } from "./styles"
import { MenuNav, Items } from "components/MenuNav"

type Props = {
}

const MENU_NAVIGATION: Array<Items> = [
  {
    title: "Layout",
    sections: [
      {
        name: "Scaling",
        href: "idk yet",
      },
      {
        name: "Area",
        href: "idk yet",
      },
      {
        name: "Alignment",
        href: "idk yet",
      },
      {
        name: "Padding",
        href: "idk yet",
      },
      {
        name: "Gutter",
        href: "idk yet",
      },
      {
        name: "Page",
        href: "idk yet",
      },
    ],
  },
  {
    title: "Header",
    sections: [
      {
        name: "Area",
        href: "idk yet",
      },
      {
        name: "Alignment",
        href: "idk yet",
      },
      {
        name: "Order",
        href: "idk yet",
      },
      {
        name: "Greeting",
        href: "idk yet",
      },
      {
        name: "Transitional words",
        href: "idk yet",
      },
      {
        name: "Clock",
        href: "idk yet",
      },
      {
        name: "Data",
        href: "idk yet",
      },
      {
        name: "Search",
        href: "idk yet",
      },
      {
        name: "Edit/Add",
        href: "idk yet",
      },
      {
        name: "Colour/Accent", // its color*... sigh... brits
        href: "idk yet",
      },
      {
        name: "Settings menu",
        href: "idk yet",
      },
      {
        name: "Border",
        href: "idk yet",
      },
      {
        name: "Position when scrolling",
        href: "idk yet",
      },
      {
        name: "Background colour",
        href: "idk yet",
      },
    ],
  },
]

export const Menu: React.FC<Props> = ({
}) => {
  const [subMenu, setSubMenu] = useState(0)

  return (
    <Wrapper>
      <MenuNav
        items={MENU_NAVIGATION}
        onChange={index => setSubMenu(index)}
        subMenu={subMenu}
      />
    </Wrapper>
  )
}