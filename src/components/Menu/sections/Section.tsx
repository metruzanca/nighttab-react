import React from "react"

interface Props {
  name: string
  hash: string
}

export const Section: React.FC<Props> = ({
  name, hash, children
}) => (
  <div id={hash}>
    <div>
      <h2>{name}</h2>
    </div>
    <div>
      {children}
    </div>
  </div>
)