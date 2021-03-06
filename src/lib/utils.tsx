import React from 'react'

interface Props {
  components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>
  children: React.ReactNode
}

/**
 * Compose provider components together
 */
export const Compose: React.FC<Props> = ({components = [], children}) => (
  <>
    {
      components.reduceRight((acc, Comp) => (
        <Comp>{acc}</Comp>
      ), children)
    }
  </>
)
