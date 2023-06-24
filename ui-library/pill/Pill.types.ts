import { ColorType, SizeType, VariantType } from "ui-library/_theme/Theme.types"

export interface PillProps {
  label: string
  variant?: VariantType
  size?: SizeType
  color?: ColorType
  onClick?: (event: React.MouseEvent) => void
}
