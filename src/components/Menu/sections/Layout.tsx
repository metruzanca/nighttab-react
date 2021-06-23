import { Slider } from "components/Form"
import { useDispatch, useSelector } from "react-redux"
import { actions, RootState } from "store/ducks"
import { Layout as LayoutType, MenuSection } from "types"
import {Section} from './Section'

const subSections = [
  {name: 'Scaling', hash: 'Scaling'},
  {name: 'Area', hash: 'Area'},
  {name: 'Alignment', hash: 'Alignment'},
  {name: 'Padding', hash: 'Padding'},
  {name: 'Gutter', hash: 'Gutter'},
  {name: 'Page', hash: 'Page'},
]


export const Component: React.FC = () => {
  const layout = useSelector<RootState, LayoutType>(state => state.state.layout)
  const dispatch = useDispatch()
  return (
    <>
      <Section {...subSections[0]}>
        <Slider
          min={50}
          max={200}
          defaultValue={100}
          onChange={
            size => dispatch(actions.settings.updateLayout({size: size / 100}))
          }
          value={layout.size * 100}
        >
          Size
        </Slider>
        <br />
        Resize all elements on the page.
        <br />
        Take care as some elements could scale up to outside the page.
      </Section>
      <Section {...subSections[1]}>
      <Slider
          min={10}
          max={100}
          defaultValue={80}
          onChange={width => dispatch(actions.settings.updateLayout({width}))}
          value={layout.width}
        >
          Width
        </Slider>
      </Section>
    </>
  )
}

const Layout: MenuSection = {
  name: 'Layout',
  subSections,
  component: Component,
}

export default Layout