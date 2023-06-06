import { ChangeEventHandler } from "react"

export interface InputProps {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  name?: string
  placeholder?: string
  autoComplete?: string
  disabled?: boolean
  autoFocus?: boolean
  onBlur?: ChangeEventHandler<HTMLInputElement>
  maxLength?: number
}
