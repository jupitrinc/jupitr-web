import { ChangeEventHandler } from "react"

export interface RangerProps {
  value: number
  min: number
  max: number
  onChange: ChangeEventHandler<HTMLInputElement>
}
