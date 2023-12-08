import { ThemeColorEnum } from "ui-library/_theme/Theme.types"

export const textStyles = {
  color: {
    [`${ThemeColorEnum.standard}`]: "text-gray-600",
    [`${ThemeColorEnum.important}`]: "text-blue-500",
    [`${ThemeColorEnum.dangerous}`]: "text-red-500",
    "special":
      "text-transparent bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text",
  },
  size: {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-lg sm:text-xl",
    xl2: "text-2xl",
    xl3: "text-2xl sm:text-3xl",
    xl4: "text-3xl sm:text-4xl",
  },
  fontFamily: {
    brand: "font-mw",
  },
  align: {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  },
  weight: {
    bold: "font-medium",
  },
}
