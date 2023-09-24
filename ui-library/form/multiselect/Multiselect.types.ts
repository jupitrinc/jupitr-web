type option = {
  id: string
  name: string
}

export interface MultiselectProps {
  options: option[]
  placeholder: string
  label?: string
  onSelect: (option: option) => void
  allowAddOption?: boolean
  addOption?: (option: string) => void
  invalid?: boolean
  onChange?: (query: string) => void
  loading?: boolean
}
