export interface CardProps {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent) => void
  active?: boolean
  type?: "static" | "linked" | "section"
}

export enum CardTypeEnum {
  static = "static",
  linked = "linked",
  section = "section",
}
