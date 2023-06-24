import { ChangeEventHandler } from "react"

export interface CheckboxProps {
  label: string
  value: string
  name: string
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}
