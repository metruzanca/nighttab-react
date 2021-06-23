import { Slider } from "components/Form"
import { MenuSection } from "types"
import {Section} from './Section'

const subSections = [
  {name: 'Scaling', hash: 'Scaling'},
  {name: 'Area', hash: 'Area'},
  {name: 'Alignment', hash: 'Alignment'},
  {name: 'Padding', hash: 'Padding'},
  {name: 'Gutter', hash: 'Gutter'},
  {name: 'Page', hash: 'Page'},
]

const Layout: MenuSection = {
  name: 'Layout',
  subSections,
  component: ({}) => (
    <>
      <Section {...subSections[0]}>
        <Slider
          max={200}
          min={50}
          defaultValue={100}
        >
          Size
        </Slider>
      </Section>
    </>
  ),
}

export default Layout