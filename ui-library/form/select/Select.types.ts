import { ChangeEventHandler } from "react"

export interface SelectProps {
  options: { id: string; name: string }[] | string[]
  label?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
  name?: string
  magic_word?: string
}
