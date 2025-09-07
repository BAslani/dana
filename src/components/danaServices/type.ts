export type IconGroup = {
  icon: string
  iconHover: string
  tooltip: string
}

export type TooltipIconProps = {
  title: string
  iconGroup: {
    icon: string
    iconHover: string
    tooltip: string
  }[]
  theme: string
}
