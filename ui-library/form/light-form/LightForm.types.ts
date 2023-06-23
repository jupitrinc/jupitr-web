import { ChangeEventHandler, FormEventHandler } from "react"

export interface LightFormProps {
  value?: string
  type?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onSubmit?: FormEventHandler<HTMLFormElement>
  icon: JSX.Element
  label?: string
  placeHolder?: string
  maxLength?: number
  disabled?: boolean
}
