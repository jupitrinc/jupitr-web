import { createElement } from "react"
import { TextProps } from "./Text.types"
import cn from "helper/cn"
import { textStyles as styles } from "./Text.styles"
import { ThemeColorEnum, ThemeSizeEnum } from "ui-library/_theme/Theme.types"

export const Text: React.FC<TextProps> = ({
  as = "span",
  children,
  color,
  size,
  align,
  bold,
  brand,
}) => (
  <Typography
    tag={as}
    className={cn(
      styles.color[color ? color : ThemeColorEnum.standard],
      styles.size[size ? size : ThemeSizeEnum.base],
      styles.align[align ? align : styles.align.left],
      bold && styles.weight.bold,
      brand && styles.fontFamily.brand
    )}
  >
    {children}
  </Typography>
)

export const Typography = ({ tag, children, ...props }) =>
  createElement(tag, props, children)
