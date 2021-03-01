import styled, { css } from "styled-components";

export enum ModalPosition {
  "left", "right", "center"
}

export type ModalStyleProps = {
  position?: ModalPosition
} 

function modalPosition(position?: ModalPosition){
  switch (position) {
    default:
    case ModalPosition.center: return css`
      justify-content: center;
    `
    case ModalPosition.left: return css`
      justify-content: flex-start;
    `
    case ModalPosition.right: return css`
      justify-content: flex-end;
    `
  }
}

/*
  @ZombieFox
  The idea is that with fixed we can absolutely position
  this element regardles of how deeply nested it is without
  having to add some really Jank styles to the parents.
*/
export const Container = styled.div<ModalStyleProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  ${p => modalPosition(p.position)}
  align-items: center;
`

export const Content = styled.section`
  z-index: 11;
`

export const Shade = styled.div`
  background-color: rgba(78, 78, 214, .3);
  position: fixed;
  top: -1em;
  left: -1em;
  width: 101vw;
  height: 1001vh;
  /* transition: opacity var(--layout-transition-extra-fast),background-color var(--layout-transition-extra-fast); */
  z-index: 10;
  /* TODO use cssvar here */
  /* z-index: var(--z-index-shade); */
`