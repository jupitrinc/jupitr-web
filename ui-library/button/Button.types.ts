import { ColorType, SizeType } from "ui-library/_theme/Theme.types"

export interface ButtonProps {
  label: string
  onClick: (event: React.MouseEvent) => void
  variant?: VariantType
  size?: SizeType
  type?: ColorType
  disabled?: boolean
  loading?: boolean
  icon?: JSX.Element
  arrow?: boolean
  full_width?: boolean
}

type VariantType = "text" | "contained" | "outlined"
