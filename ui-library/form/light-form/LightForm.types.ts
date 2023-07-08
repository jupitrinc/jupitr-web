import { ChangeEventHandler, FormEventHandler } from "react"

export interface LightFormProps {
  value?: string
  type?: string
  name?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onSubmit?: FormEventHandler<HTMLFormElement>
  onClick?: (event: React.MouseEvent) => void
  icon: JSX.Element
  label?: string
  placeHolder?: string
  maxLength?: number
  disabled?: boolean
  autocomplete?: boolean
}
