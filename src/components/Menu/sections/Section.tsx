import React from "react"
import styled from "styled-components"

interface Props {
  name: string
  hash: string
}

const Wrapper = styled.div`
  border-top: 1px solid red;
`

export const Section: React.FC<Props> = ({
  name, hash, children
}) => (
  <Wrapper id={hash}>
    <div>
      <h2>{name}</h2>
    </div>
    <div>
      {children}
    </div>
  </Wrapper>
)