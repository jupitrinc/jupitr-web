import { ChangeEventHandler, FormEventHandler } from "react"

export interface LightFormProps {
  value?: string
  type?: string
  name?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onSubmit?: FormEventHandler<HTMLFormElement>
  icon: JSX.Element
  placeholder?: string
  maxLength?: number
  disabled?: boolean
  autocomplete?: boolean
  loading?: boolean
  autoFocus?: boolean
  required?: boolean
}
