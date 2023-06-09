import { ReactNode } from "react"
import { ColorType, SizeType } from "ui-library/_theme/Theme.types"

export interface TextProps {
  as: TextType
  children: ReactNode
  color?: ColorType
  size?: SizeType
}

type TextType = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span"
