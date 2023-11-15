import { ThemeColorEnum } from "ui-library/_theme/Theme.types"

export const textStyles = {
  color: {
    [`${ThemeColorEnum.standard}`]: "text-gray-600",
    [`${ThemeColorEnum.important}`]: "text-blue-500",
    [`${ThemeColorEnum.dangerous}`]: "text-red-500",
  },
  size: {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    xl2: "text-2xl",
    xl4: "text-4xl",
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
