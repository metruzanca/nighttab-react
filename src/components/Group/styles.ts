import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
`

export const Name = styled.h1`
  
`

export const Control = styled.div`
  background-color:red;
  & > * {
    background-color: white;
    height:50px;
    width: 50px;
    &:hover {
      background-color: blue;
    }
  }  
`

export const MoveUp = styled.button`
  
`

export const Drag = styled.div`
  display: inline-block;
`

export const MoveDown = styled.button`
  
`

export const Edit = styled.button`
  
`

export const Delete = styled.button`
  
`

export const Body = styled.div`
  background-color: transparent;
  font-size: var(--link-item-size);
  /* position: relative; */
  display: grid;
  grid-auto-rows: var(--link-item-height);
  grid-gap: calc(var(--layout-space) * var(--layout-gutter));
  grid-template-columns: repeat(auto-fill, minmax(var(--link-item-width), 1fr));
  grid-auto-flow: dense;
`