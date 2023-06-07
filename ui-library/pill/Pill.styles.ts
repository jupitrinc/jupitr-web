import { ThemeColorEnum } from "ui-library/_theme/Theme.types"

export const pillStyles = {
  pill: "font-normal flex-1 space-x-2 ease-in-out",

  variant: {
    text: "bg-opacity-0",
    outlined: "ring-1 bg-opacity-0",
    contained: "",
  },
  type: {
    [`${ThemeColorEnum.STANDARD}`]:
      "text-gray-500  ring-gray-900/10 bg-gray-50",
    [`${ThemeColorEnum.IMPORTANT}`]:
      "text-blue-500 ring-blue-900/10 bg-blue-50",
    [`${ThemeColorEnum.DANGEROUS}`]: "text-red-500 ring-red-900/10 bg-red-50",
  },
  rounded: {
    xl: "rounded-xl",
    full: "rounded-full",
  },
  size: {
    small: "px-3 py-2 text-sm",
    medium: "px-5 py-2 text-md",
    large: "px-7 py-2 text-lg",
  },
}
