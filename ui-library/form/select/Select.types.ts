import { ChangeEventHandler } from "react"

export interface SelectProps {
  options: { id: string; name: string }[] | string[]
  defaultValue?: string
  label?: string
  onChange?: ChangeEventHandler<HTMLSelectElement>
  disabled?: boolean
  name?: string
  magic_word?: string
}
