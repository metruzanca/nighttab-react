export interface MenuSection {
  component: React.FC
  name: string
  subSections: Array<{
    name: string
    hash: string
  }>
}