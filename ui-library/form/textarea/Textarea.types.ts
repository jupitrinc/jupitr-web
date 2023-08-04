import { ChangeEventHandler } from "react"

export interface TextAreaProps {
  name: string
  value?: string
  defaultValue?: string
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  label?: string
  placeholder?: string
  disabled?: boolean
  autoFocus?: boolean
  maxLength?: number
}
