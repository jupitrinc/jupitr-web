export interface DropdownProps {
  label: string | JSX.Element
  options: Array<DropdownOptionType>
}

export type DropdownOptionType = {
  label: string
  onClick: (event: React.MouseEvent) => void
}
