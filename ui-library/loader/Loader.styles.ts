import { ThemeColorEnum } from "ui-library/_theme/Theme.types"

export const loaderStyles = {
  color: {
    [`${ThemeColorEnum.standard}`]: "text-gray-500",
    [`${ThemeColorEnum.important}`]: "text-blue-500",
    [`${ThemeColorEnum.dangerous}`]: "text-red-500",
  },
}
