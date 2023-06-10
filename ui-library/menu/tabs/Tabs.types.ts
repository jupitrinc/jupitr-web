import { SizeType } from "ui-library/_theme/Theme.types"

export interface TabsProps {
  items: string[]
  active_tab: number
  onChange: (index: number) => void
  size?: SizeType
}
