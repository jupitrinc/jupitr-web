import { ChangeEventHandler } from "react"

export interface SelectProps {
  options: option[]
  value: option
  placeholder: string
  label?: string
  onChange?: ChangeEventHandler<HTMLSelectElement>
  disabled?: boolean
  name?: string
  magic_word?: string
  invalid?: boolean
}

type option = { id: string; name: string } | string
