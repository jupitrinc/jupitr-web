import { createElement } from "react"
import { TextProps } from "./Text.types"
import clsx from "clsx"
import { textStyles as styles } from "./Text.styles"
import { ThemeColorEnum, ThemeSizeEnum } from "ui-library/_theme/Theme.types"

export const Text: React.FC<TextProps> = ({
  as = "span",
  children,
  color,
  size,
  align,
}) => (
  <Typography
    tag={as}
    className={clsx(
      styles.color[color ? color : ThemeColorEnum.standard],
      styles.size[size ? size : ThemeSizeEnum.base],
      styles.align[align ? align : styles.align.left],
      heading.includes(as) && styles.heading.fontFamily
    )}
  >
    {children}
  </Typography>
)

export const Typography = ({ tag, children, ...props }) =>
  createElement(tag, props, children)

const heading = ["h1", "h2", "h3", "h4", "h5", "h6"]
