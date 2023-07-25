import { ChangeEventHandler } from "react"

type option = {
  id: string
  name: string
}

export interface MultiselectProps {
  options: option[]
  placeholder: string
  label?: string
  onChange: (option: { id: string; name: string }) => void
}
