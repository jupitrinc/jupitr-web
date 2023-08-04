import { ChangeEventHandler } from "react"

export interface SelectProps {
  options: option[]
  defaultValue: option
  label?: string
  onChange?: ChangeEventHandler<HTMLSelectElement>
  disabled?: boolean
  name?: string
  magic_word?: string
}

type option = { id: string; name: string } | string
