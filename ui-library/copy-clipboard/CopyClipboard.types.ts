import { ButtonProps } from "ui-library/button/Button.types"

export interface CopyClipboardProps
  extends Omit<ButtonProps, "onClick" | "type" | "full_width" | "arrow"> {
  value: string
  confirmLabel?: string
}
