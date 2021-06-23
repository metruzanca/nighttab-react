import React, { useRef } from "react"
import styled from "styled-components"
import { v4 as uuid } from "uuid"

type Props = {
  defaultValue: number
  disabled?: boolean
  max: number
  min: number
  onChange: (value: number) => void
  onMouseDown?: () => void
  onMouseUp?: () => void
  step?: number
  value: number
}

const StyledSlider = styled.input`

`

const StyledLabel = styled.label`

`

const StyledInput = styled.input`

`

const StyledButton = styled.button`

`

export const Slider: React.FC<Props> = ({
  children,
  defaultValue,
  disabled = false,
  max,
  min,
  onChange,
  onMouseDown = () => {},
  onMouseUp = () => {},
  step = 1,
  value,
}) => {
  const ref = useRef(uuid())
  return (
    <>
      <StyledLabel htmlFor={ref.current}>
        {children}
      </StyledLabel>
      <StyledSlider
        type='range'
        id={ref.current}
        max={max}
        min={min}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onChange={event => onChange(parseInt(event.target.value))}
        disabled={disabled}
        value={value}
        step={step}
      />
      <StyledInput
        type='number'
        max={max}
        min={min}
        disabled={disabled}
        onChange={event => onChange(parseInt(event.target.value))}
        value={value.toFixed()}
      />
      <StyledButton
        disabled={disabled}
        onClick={() => onChange(defaultValue)}
      >
        Reset
      </StyledButton>
    </>
  )
}