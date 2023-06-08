export interface DropdownProps {
  type: "avatar" | "label" | "more"
  options: Array<option>
  image_url?: string
  label?: string
}

type option = {
  name: string
  onClick: (event: React.MouseEvent) => void
}
