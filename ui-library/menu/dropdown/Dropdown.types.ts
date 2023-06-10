export interface DropdownProps {
  type: "avatar" | "label" | "more"
  items: Array<item>
  image_url?: string
  label?: string
}

type item = {
  name: string
  onClick: (event: React.MouseEvent) => void
}
