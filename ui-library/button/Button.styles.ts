import { ThemeColorEnum } from "ui-library/__theme/Theme.types"

export const buttonStyles = {
  button: "font-medium flex-1 space-x-2 focus:outline-none ease-in-out",
  icon_button:
    "font-medium p-3 text-center inline-flex items-center focus:outline-none ease-in-out",

  variant: {
    text: "bg-opacity-0",
    outlined: "ring-1 bg-opacity-0",
    contained: "",
  },
  type: {
    [`${ThemeColorEnum.STANDARD}`]:
      "text-gray-500 hover:text-gray-600 ring-gray-900/10 hover:ring-gray-900/20 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 disabled:cursor-not-allowed disabled:text-opacity-50 disabled:hover:text-opacity-50 disabled:hover:text-gray-500 disabled:hover:bg-gray-50 disabled:active:bg-gray-50",
    [`${ThemeColorEnum.IMPORTANT}`]:
      "text-blue-500 hover:text-blue-600 ring-blue-900/10 hover:ring-blue-900/20 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 disabled:cursor-not-allowed disabled:text-opacity-50 disabled:hover:text-opacity-50 disabled:hover:text-blue-500 disabled:hover:bg-blue-50 disabled:active:bg-blue-50",
    [`${ThemeColorEnum.DANGEROUS}`]:
      "text-red-500 hover:text-red-600 ring-red-900/10 hover:ring-red-900/20 bg-red-50 hover:bg-red-100 active:bg-red-200 disabled:cursor-not-allowed disabled:text-opacity-50 disabled:hover:text-opacity-50 disabled:hover:text-red-500 disabled:hover:bg-red-50 disabled:active:bg-red-50",
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
  width: {
    full: "w-full",
  },
}
