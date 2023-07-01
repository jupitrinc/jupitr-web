import { ColorType, VariantType } from "ui-library/_theme/Theme.types"

export interface CardProps {
  children: React.ReactNode
  onClick: (event: React.MouseEvent) => void
  color?: ColorType
  active?: boolean
}
