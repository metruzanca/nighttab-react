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
  display: grid;
`