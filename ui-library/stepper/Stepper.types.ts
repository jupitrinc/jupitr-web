export interface StepperProps {
  steps: step[]
  clickable: boolean
}

type step = {
  step_label?: string | JSX.Element
  name: string
  active: boolean
  onClick?: (event: React.MouseEvent) => void
}
