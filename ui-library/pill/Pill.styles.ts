import { ThemeColorEnum } from "ui-library/_theme/Theme.types"
import { buttonStyles } from "ui-library/button/Button.styles"

export const pillStyles = {
  pill: "font-normal flex-1 space-x-2 ease-in-out",

  variant: {
    text: "bg-opacity-0",
    outlined: "ring-1 bg-opacity-0",
    contained: "",
  },
  color: {
    [`${ThemeColorEnum.standard}`]:
      "text-gray-500  ring-gray-900/10 bg-gray-50",
    [`${ThemeColorEnum.important}`]:
      "text-blue-500 ring-blue-900/10 bg-blue-50",
    [`${ThemeColorEnum.dangerous}`]: "text-red-500 ring-red-900/10 bg-red-50",
  },
  rounded: {
    xl: "rounded-xl",
    full: "rounded-full",
  },
  size: buttonStyles.size,
}
