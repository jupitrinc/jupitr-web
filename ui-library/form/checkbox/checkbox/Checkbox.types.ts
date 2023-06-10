import { ChangeEventHandler } from "react"

export interface CheckboxProps {
  label: string
  checked: boolean
  name: string
  onChange: ChangeEventHandler<HTMLInputElement>
}
