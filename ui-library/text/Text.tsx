import { createElement } from "react"
import { TextProps } from "./Text.types"
import clsx from "clsx"
import { textStyles } from "./Text.styles"
import { ThemeColorEnum, ThemeSizeEnum } from "ui-library/_theme/Theme.types"

export const Text: React.FC<TextProps> = ({
  as = "span",
  children,
  color,
  size,
}) => (
  <Typography
    tag={as}
    className={clsx(
      textStyles.color[color ? color : ThemeColorEnum.standard],
      textStyles.size[size ? size : ThemeSizeEnum.base],
      heading.includes(as) && textStyles.heading.fontFamily
    )}
  >
    {children}
  </Typography>
)

export const Typography = ({ tag, children, ...props }) =>
  createElement(tag, props, children)

const heading = ["h1", "h2", "h3", "h4", "h5", "h6"]
