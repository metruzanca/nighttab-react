import React from "react"
import styled from "styled-components"

type Props = {
  max: number
  min: number
  defaultValue: number
}

export const StyledSlider = styled.input`

`

export const Slider: React.FC<Props> = ({}) => {

  return (
    <StyledSlider />
  )
}