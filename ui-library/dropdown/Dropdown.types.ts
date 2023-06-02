export interface DropdownProps {
  label: string | null
  type: "avatar" | "tab" | "placeholder"
  options: Array<option>
  imgSrc?: string | null
  imgSize?: number
  imgAlt?: string
  imgClassName?: string
  disabled?: boolean
}

type option = {
  label: string
  onClick: (event: React.MouseEvent) => void
}
