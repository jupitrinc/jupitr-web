import { ChangeEventHandler } from "react"

export interface InputProps {
  value: string
  name?: string
  type?: string
  placeholder?: string
  autoComplete?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
  invalid?: boolean
  className?: string
  autoFocus?: boolean
  onBlur?: ChangeEventHandler<HTMLInputElement>
  maxLength: number
}
