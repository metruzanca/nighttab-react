import { editingContext } from "contexts"
import React, { useContext } from "react"
import styled from "styled-components"

type Props = {}

const Wrapper = styled.div`
  background-color: #302929;
  position: absolute;
  top: 0;
  right: 0;
  padding: .5em;
`

const Button = styled.button`
  background-color: #000000;
  color: red;
  padding: .5em;
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
  const {setEditing, editing} = useContext(editingContext)
  return (
    <Wrapper>
      <H1>Debug Tools</H1>
      <Button
        onClick={() => setEditing(!editing)}
      >Toggle Edit Mode</Button>
    </Wrapper>
  )
}