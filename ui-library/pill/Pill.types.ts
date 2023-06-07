import { ColorType, SizeType, VariantType } from "ui-library/_theme/Theme.types"

export interface PillProps {
  label: string
  variant?: VariantType
  size?: SizeType
  type?: ColorType
}
