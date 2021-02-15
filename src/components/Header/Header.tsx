import React from "react"
import { Wrapper } from "./styles"
import {
  Clock,
  Date,
  EditAdd,
  Greeting,
  Menu,
  ColorAccent,
  SearchBar,
  Transitional,
} from './components'

type Props = {}

export const Header: React.FC<Props> = ({}) => {

  return (
    <Wrapper>
      <Greeting/>
      <Transitional/>
      <Clock/>
      <Date/>
      <SearchBar/>
      <EditAdd/>
      <ColorAccent/>
      <Menu/>
    </Wrapper>
  )
}