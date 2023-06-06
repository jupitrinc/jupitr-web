import { ChangeEventHandler } from "react"
import { SizeType } from "ui-library/_theme/Theme.types"

export interface ToggleProps {
  onChange: ChangeEventHandler<HTMLInputElement>
  size?: SizeType
  label?: string
  disabled?: boolean
}
