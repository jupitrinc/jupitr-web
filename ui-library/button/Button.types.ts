export interface ButtonProps {
  label: string | JSX.Element
  onClick: (event: React.MouseEvent) => void
  disabled?: boolean
  loading?: boolean
  testId?: string
}
