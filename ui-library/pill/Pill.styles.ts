import { themeStyles } from "ui-library/_theme/Theme.styles"
import { ThemeColorEnum } from "ui-library/_theme/Theme.types"
import { buttonStyles } from "ui-library/button/Button.styles"

export const pillStyles = {
  pill: "flex items-center space-x-2 rounded-lg",

  variant: {
    text: "bg-opacity-0",
    outlined: "ring-1 bg-opacity-0",
    contained: "",
  },
  color: {
    [`${ThemeColorEnum.standard}`]:
      "text-gray-600  ring-gray-900/10 bg-gray-100",
    [`${ThemeColorEnum.important}`]:
      "text-blue-500 ring-blue-900/10 bg-blue-50",
    [`${ThemeColorEnum.dangerous}`]: "text-red-500 ring-red-900/10 bg-red-50",
    [`${ThemeColorEnum.special}`]: `text-white ${themeStyles.backgroundColor.special.default}`,
  },
  size: buttonStyles.size,
}
