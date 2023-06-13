import { ChangeEventHandler } from "react"

export interface SelectProps {
  onChange: ChangeEventHandler<HTMLInputElement>
  options: string[]
  label: string
  disabled?: boolean
  name?: string
}
