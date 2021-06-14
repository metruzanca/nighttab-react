/**
 * WIP
 * 
 * This component is a placeholder
 * 
 * In the future formWrap and friends will be moved to a permenant location & better organized
 * 
 */
import { hex2rgb, hsl2rgb, rgb2hex, rgb2hsl } from "lib/color"
import React, { useEffect, useMemo, useRef, useState } from "react"
import { HSL, RGB } from "types"
import { v4 as uuid } from 'uuid'
import {
  FormWrap,
  FormIndent,
  Hr,
  FormGroup,
  InputColor,
  InputText,
  InputRange,
  InputNumber,
} from "./styles"

type ColorPickerProps = {}

type ChangeProps = React.ChangeEvent<HTMLInputElement>



function useColor({initialRgb, initialHsl}: {initialRgb:RGB, initialHsl:HSL}) {
  const [rgb, setRgb] = useState<RGB>(initialRgb)
  const [hsl, setHsl] = useState<HSL>(initialHsl)

  function updateRGB(newColor: Partial<RGB>){
    setRgb(rgb => {
      const newRgb = {...rgb, ...newColor}
      setHsl(rgb2hsl(newRgb))
      return newRgb
    })
  }

  function updateHSL(newColor: Partial<HSL>) {
    setHsl(hsl => {
      const newHsl = {...hsl, ...newColor}
      setRgb(hsl2rgb(newHsl))
      return newHsl
    })
  }

  return {
    rgb,
    hsl,
    updateRGB,
    updateHSL,
  }
}


export const ColorPicker: React.FC<ColorPickerProps> = ({}) => {
  const [color, setColor] = useState<RGB>({ r:0, g:0, b:0 })
  const {r, g, b} = color
  const hsl = useMemo(() => rgb2hsl(color), [color])
  const {h, s, l} = hsl

  function updateRGB(newColor: Partial<RGB>) {
    setColor({...color, ...newColor})
  }
  
  function updateHSL(newColor: Partial<HSL>) {
    setColor(hsl2rgb({...hsl, ...newColor}))
  }

  return (
    <FormWrap>
      <FormIndent>
        <ColorInput
          color={color}
          onChange={value => setColor(value)}
        />
        <Hr/>
        <ColorSlider
          label="Hue"
          max={359}
          value={h}
          onInput={value => updateHSL({h: value})}
        />
        <ColorSlider
          label="Saturation"
          max={100}
          value={s}
          onInput={value => updateHSL({s: value})}
        />
        <ColorSlider
          label="Lightness"
          max={100}
          value={l}
          onInput={value => updateHSL({l: value})}
        />
        <Hr/>
        <ColorSlider
          label="Red"
          onInput={value => updateRGB({r: value})}
          value={r}
        />
        <ColorSlider
          label="Green"
          onInput={value => updateRGB({g: value})}
          value={g}
        />
        <ColorSlider
          label="Blue"
          onInput={value => updateRGB({b: value})}
          value={b}
        />
        <Hr/>
      </FormIndent>
    </FormWrap>
  )
}

type Props = {
  label: string
  onInput: (value: number) => void
  value: number
  max?: number
}

const ColorSlider: React.FC<Props> = ({
  label,
  onInput,
  value,
  max = 255,
}) => {
  const ref = useRef(uuid())
  const handleChange = (event: ChangeProps) => onInput(parseInt(event.target.value))

  return (
    <FormWrap>
      <FormGroup>
        <label htmlFor={ref.current}>{label}</label>
        <InputRange id={ref.current}
          value={value}
          onInput={handleChange}
          max={max}
          min={0}
        />
        <InputNumber
          value={value}
          onInput={handleChange}
          max={max}
          min={0}
        />
      </FormGroup>
    </FormWrap>
  )
}

type ColorInputProps = {
  color: RGB
  onChange: (value: RGB) => void
}

export const ColorInput: React.FC<ColorInputProps> = ({
  color, onChange
}) => {

  function handleFocus() {
    //TODO
  }

  function handleBlur() {
    //TODO
  }

  return (
    <FormWrap>
      <FormGroup>
        <InputColor
          value={rgb2hex(color)}
          onChange={event => onChange(hex2rgb(event.target.value))}
        />
        <InputText
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={rgb2hex(color)}
          onChange={event => onChange(hex2rgb(event.target.value))}
        />
      </FormGroup>
    </FormWrap>
  )
}