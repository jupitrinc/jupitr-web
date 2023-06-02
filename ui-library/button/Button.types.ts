export interface ButtonProps {
  label: string
  onClick: (event: React.MouseEvent) => void
  variant?: "text" | "contained" | "outlined"
  size?: "small" | "medium" | "large"
  type?: "default" | "important" | "dangerous"
  disabled?: boolean
  loading?: boolean
  icon?: JSX.Element
  arrow?: boolean
  fullWidth?: boolean
}
