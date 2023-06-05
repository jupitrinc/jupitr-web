import { ThemeColorEnum } from "./Theme.types"

export const themeStyles = {
  border: {
    [`${ThemeColorEnum.STANDARD}`]:
      "border-0 ring-1 ring-gray-900/10 hover:ring-gray-900/20 focus:outline-none",
  },
  textColor: {
    [`${ThemeColorEnum.STANDARD}`]: {
      600: "text-gray-600",
    },
  },

  backgroundColor: {
    [`${ThemeColorEnum.STANDARD}`]: {
      50: "bg-gray-50",
      100: "bg-gray-100",
      200: "bg-gray-200",
    },
    [`${ThemeColorEnum.IMPORTANT}`]: {
      50: "bg-blue-50",
      500: "bg-blue-500",
    },
  },
}
