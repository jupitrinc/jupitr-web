import { ChangeEventHandler } from "react"
import { SizeType } from "ui-library/_theme/Theme.types"

export interface ToggleProps {
  onChange: ChangeEventHandler<HTMLInputElement>
  checked: boolean
  size?: SizeType
  label?: string
  disabled?: boolean
}
