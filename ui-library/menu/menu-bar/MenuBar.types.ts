import { VariantType } from "ui-library/_theme/Theme.types"

export interface MenuBarProps {
  items: Array<item>
  max_number: number
  variant?: VariantType
}

type item = {
  name: string
  onClick: (event: React.MouseEvent) => void
}
