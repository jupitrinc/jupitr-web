import { ChangeEventHandler } from "react"
import { SizeType } from "ui-library/_theme/Theme.types"

export interface SelectProps {
  options: option[]
  value: option
  placeholder: string
  label?: string
  onChange?: ChangeEventHandler<HTMLSelectElement>
  disabled?: boolean
  name?: string
  magic_word?: string
  invalid?: boolean
  size?: SizeType
}

type option = { id: string; name: string } | string
