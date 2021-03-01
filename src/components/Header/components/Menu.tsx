import React from "react"

export type MenuProps = {
  setOpen: () => void
}

export const Menu: React.FC<MenuProps> = ({
  setOpen
}) => {

  return (
    <button onClick={setOpen}>Menu</button>
  )
}