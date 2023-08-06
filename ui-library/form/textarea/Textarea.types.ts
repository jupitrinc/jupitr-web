import { ChangeEventHandler } from "react"

export interface TextAreaProps {
  name: string
  value?: string
  defaultValue?: string
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  onBlur?: ChangeEventHandler<HTMLTextAreaElement>
  label?: string
  placeholder?: string
  disabled?: boolean
  autoFocus?: boolean
  maxLength?: number
  invalid?: boolean
}
