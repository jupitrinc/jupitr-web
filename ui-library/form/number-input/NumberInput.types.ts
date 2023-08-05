import { ChangeEventHandler } from "react"

export interface NumberInputProps {
  value?: number
  label?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  name?: string
  placeholder?: string
  autoComplete?: string
  disabled?: boolean
  autoFocus?: boolean
  onBlur?: ChangeEventHandler<HTMLInputElement>
  invalid?: boolean
}
