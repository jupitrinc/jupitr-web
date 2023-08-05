import { ChangeEventHandler } from "react"

export interface TextInputProps {
  value?: string
  label?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  name?: string
  placeholder?: string
  autoComplete?: string
  disabled?: boolean
  autoFocus?: boolean
  onBlur?: ChangeEventHandler<HTMLInputElement>
  maxLength?: number
  type?: string
  light?: boolean
  required?: boolean
  invalid?: boolean
}
