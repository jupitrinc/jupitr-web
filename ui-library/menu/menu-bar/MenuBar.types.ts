import { SizeType, VariantType } from "ui-library/_theme/Theme.types"

export interface MenuBarProps {
  options: Array<option>
  max_number: number
  variant?: VariantType
  size?: SizeType
}

type option = {
  name: string
  onClick: (event: React.MouseEvent) => void
}
