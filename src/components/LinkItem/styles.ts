import styled from "styled-components";
import { theme } from "styles";

export const Wrapper = styled.div`
  background-color: #413d69;
  color: white;
  & > a:visited {
    color: lightblue;
  }
  /* Width and height wasn't defined here in the original, as it was using grid.
  I placed this here for initial development. Should be removed later */
  width: ${theme.linkItemWidth};
  height: ${theme.linkItemHeight};

  &:hover {
    transform: scale(1.05);
  }

  margin: 1em;
`

export const Front = styled.a`

`

export const Icon = styled.a`

`

export const DisplayName = styled.p`

`

export const Back = styled.div`

`

export const Url = styled.div`

`

export type ControlProps = {
  editing: boolean
}

export const Control = styled.div<ControlProps>`
  display: ${p => p.editing ? "flex" : "none"};
  flex-wrap: wrap;
`

export const Drag = styled.div`
  flex-grow: 1;
`

export const MoveLeft = styled.button`
  flex-basis: 30%;
  height: 30px;

`

export const MoveRight = styled.button`
  flex-basis: 30%;
  height: 30px;

`


export const Edit = styled.button`
  height: 30px;
  width: 50%;
  border-bottom-left-radius: ${theme.borderRadius};
`

export const Delete = styled.button`
  height: 30px;
  width: 50%;
  border-bottom-right-radius: ${theme.borderRadius};
`