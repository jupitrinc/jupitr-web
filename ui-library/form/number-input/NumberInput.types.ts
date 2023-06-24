import { ChangeEventHandler } from "react"

export interface NumberInputProps {
  value?: string
  label?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  name?: string
  placeholder?: string
  autoComplete?: string
  disabled?: boolean
  autoFocus?: boolean
  onBlur?: ChangeEventHandler<HTMLInputElement>
}
