import { EditingContext } from "contexts"
import { Persistance } from "lib"
import React, { useContext } from "react"
import styled from "styled-components"

import devconfig from './devconfig.json'

type Props = {}

const Wrapper = styled.div`
  background-color: #302929;
  position: absolute;
  top: 0;
  right: 0;
  padding: .5em;
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  background-color: #000000;
  color: red;
  padding: .5em;
  margin: .4em 0;
  border-radius: .5em;
  &:hover{
    background-color: #1f1f1f;
  }
  cursor: pointer;
`

const H1 = styled.div`
  background-color: #302929;
  color: red;
  margin-bottom: .5em;
`

export const Debug: React.FC<Props> = ({}) => {
  const {setEditing, editing} = useContext(EditingContext)
  const handleToggleEdit =  () => setEditing(!editing)
  const handleInjectConfig = () => Persistance("localstorage").save(devconfig)
  return (
    <Wrapper>
      <H1>Debug Tools</H1>
      <Button onClick={handleToggleEdit}>
        Toggle Edit Mode
      </Button>
      <Button onClick={handleInjectConfig}>
        Inject NightTab Dev Config
      </Button>
    </Wrapper>
  )
}