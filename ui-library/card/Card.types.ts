export interface CardProps {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent) => void
  active?: boolean
  type?: "static" | "linked"
}

export enum CardTypeEnum {
  static = "static",
  linked = "linked",
}
