import { MenuSection } from "types"
import {Section} from './Section'

const subSections = [
  {
    name: "Area",
    hash: "Area",
  },
  {
    name: "Alignment",
    hash: "Alignment",
  },
  {
    name: "Order",
    hash: "Order",
  },
  {
    name: "Greeting",
    hash: "Greeting",
  },
  {
    name: "Transitional words",
    hash: "Transitional words",
  },
  {
    name: "Clock",
    hash: "Clock",
  },
  {
    name: "Data",
    hash: "Data",
  },
  {
    name: "Search",
    hash: "Search",
  },
  {
    name: "Edit/Add",
    hash: "Edit/Add",
  },
  {
    name: "Colour/Accent",
    hash: "Colour/Accent",
  },
  {
    name: "Settings menu",
    hash: "Settings menu",
  },
  {
    name: "Border",
    hash: "Border",
  },
  {
    name: "Position when scrolling",
    hash: "Position when scrolling",
  },
  {
    name: "Background colour",
    hash: "Background colour",
  },
]

const Header: MenuSection = {
  name: 'Header',
  subSections,
  component: ({}) => (
    <>
      <Section {...subSections[0]}>
        next section content
      </Section>
    </>
  ),
}

export default Header