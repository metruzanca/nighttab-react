export interface Layout {
  alignment: LayoutAlignment
  order: LayoutOrder
  direction: LayoutDirection
  padding: number
  gutter: number
  size: number
  width: number
  scrollPastEnd: boolean
  scrollbars: LayoutScrollbars
  title: string
}

export type LayoutAlignment =
| 'topleft'    | 'topcenter'    | 'topright'
| 'centerleft' | 'centercenter' | 'centerright'
| 'bottomleft' | 'bottombottom' | 'bottomright'

export type LayoutOrder = 'headerlink' | 'linkheader'

export type LayoutDirection = 'vertical' | 'horizontal'

export type LayoutScrollbars = 'auto' | 'thin' | 'none'