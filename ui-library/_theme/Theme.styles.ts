import { ThemeColorEnum } from "./Theme.types"

export const themeStyles = {
  disabled:
    "disabled:cursor-not-allowed disabled:text-opacity-70 disabled:hover:text-opacity-70",
  border: {
    [`${ThemeColorEnum.standard}`]:
      "border-0 ring-1 rounded-lg ring-gray-900/10 hover:ring-gray-900/20 focus:outline-none disabled:hover:ring-gray-900/10 focus:ring-gray-900/20",
  },
  textColor: {
    [`${ThemeColorEnum.standard}`]: {
      400: "text-gray-400",
      500: "text-gray-500",
      600: "text-gray-600",
    },
    [`${ThemeColorEnum.important}`]: {
      400: "text-blue-400",
      500: "text-blue-500",
      600: "text-blue-600",
    },

    [`${ThemeColorEnum.dangerous}`]: {
      400: "text-red-400",
      500: "text-red-500",
      600: "text-red-600",
    },
  },
  backgroundColor: {
    [`${ThemeColorEnum.standard}`]: {
      50: "bg-gray-50",
      100: "bg-gray-100",
      200: "bg-gray-200",
      300: "bg-gray-300",
    },
    [`${ThemeColorEnum.important}`]: {
      50: "bg-blue-50",
      500: "bg-blue-500",
    },
    [`${ThemeColorEnum.special}`]: {
      default: "bg-gradient-to-r from-orange-400 to-rose-400",
    },
  },

  animation: {
    scale:
      "cursor-pointer transition-[transform, opacity] hover:scale-125 ease-in-out duration-500",
  },
}
