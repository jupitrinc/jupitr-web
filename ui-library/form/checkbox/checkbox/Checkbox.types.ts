import { ChangeEventHandler } from "react"

export interface CheckboxProps {
  label: string
  value: string
  name: string
  defaultValue?: boolean
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}
