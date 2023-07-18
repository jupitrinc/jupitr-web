import { themeStyles } from "ui-library/_theme/Theme.styles"
import { ThemeColorEnum } from "ui-library/_theme/Theme.types"

export const buttonStyles = {
  button:
    "font-medium flex space-x-2 focus:outline-none ease-in-out justify-center items-center",
  icon_button:
    "font-medium p-2 text-center inline-flex items-center focus:outline-none ease-in-out",

  variant: {
    text: "bg-opacity-0",
    outlined: "ring-1 bg-opacity-0",
    contained: "",
  },
  color: {
    [`${ThemeColorEnum.standard}`]:
      "text-gray-600 ring-gray-900/10 hover:ring-gray-900/20 bg-gray-200 hover:bg-gray-200 active:bg-gray-300 disabled:cursor-not-allowed disabled:text-opacity-50 disabled:hover:text-opacity-50 disabled:hover:bg-gray-200 disabled:active:bg-gray-200",
    [`${ThemeColorEnum.important}`]:
      "text-blue-500 ring-blue-900/10 hover:ring-blue-900/20 bg-blue-100 hover:bg-blue-100 active:bg-blue-200 disabled:cursor-not-allowed disabled:text-opacity-50 disabled:hover:text-opacity-50 disabled:hover:text-blue-500 disabled:hover:bg-blue-100 disabled:active:bg-blue-100",
    [`${ThemeColorEnum.dangerous}`]:
      "text-red-500 ring-red-900/10 hover:ring-red-900/20 bg-red-100 hover:bg-red-100 active:bg-red-200 disabled:cursor-not-allowed disabled:text-opacity-50 disabled:hover:text-opacity-50 disabled:hover:text-red-500 disabled:hover:bg-red-100 disabled:active:bg-red-100",
    [`${ThemeColorEnum.special}`]: `text-white ring-0 ${themeStyles.backgroundColor.special.default} active:${themeStyles.backgroundColor.special.default} disabled:cursor-not-allowed disabled:text-opacity-80 disabled:hover:text-opacity-80`,
  },
  rounded: {
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  },
  size: {
    xs: "px-5 py-2 text-xs",
    sm: "px-5 py-2 text-sm",
    base: "px-5 py-2 text-base",
    lg: "px-7 py-2 text-lg",
    xl: "px-7 py-2 text-xl",
  },
  width: {
    full: "w-full",
  },
  loader: "inline w-4 h-4",
}
