import { HTMLProps } from "react";
import styled from "styled-components";

// TODO move these to "styles"

export const FormWrap = styled.div`

`

export const FormIndent = styled.div`

`

export const Hr = styled.hr`

`

export const FormGroup = styled.div`

`

const Color = styled.input`

`

const Text = styled.input`
  
`

const Number = styled.input`
  
`

const Range = styled.input`
  
`
type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">

export const InputText = (props: InputProps) => <Text type={"text"} {...props}/>
export const InputColor = (props: InputProps) => <Color type={"color"} {...props}/>
export const InputNumber = (props: InputProps) => <Number type={"number"} {...props}/>
export const InputRange = (props: InputProps) => <Range type={"range"} {...props}/>