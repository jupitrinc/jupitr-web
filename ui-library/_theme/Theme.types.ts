export enum ThemeColorEnum {
  standard = "standard",
  important = "important",
  dangerous = "dangerous",
  special = "special",
}
export enum ThemeSizeEnum {
  xs = "xs",
  sm = "sm",
  base = "base",
  lg = "lg",
  xl = "xl",
}
export enum ThemeVariantEnum {
  text = "text",
  contained = "contained",
  outlined = "outlined",
}

export type Theme = "light" | "dark"
export type ColorType = "standard" | "important" | "dangerous" | "special"
export type SizeType =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "xl2"
  | "xl3"
  | "xl4"
export type VariantType = "text" | "contained" | "outlined"
