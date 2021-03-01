import { useOnClickOutside } from "hooks/useOnClickOutside"
import React, { useRef } from "react"
import { Shade, ModalStyleProps, Container, Content } from "./styles"



interface Props extends ModalStyleProps{
  closeMenu: () => void
}

/** Size of the Modal is determined by its content. */
export const Modal: React.FC<Props> = ({
  closeMenu,
  position,
  children,
}) => {
  const menu = useRef<HTMLElement>(null)
  useOnClickOutside(menu, closeMenu)

  return (
    <Container position={position}>
      <Content ref={menu}>
        {children}
      </Content>
      <Shade/>
    </Container>
  )
}