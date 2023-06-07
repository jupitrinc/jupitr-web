import { ThemeColorEnum } from "ui-library/_theme/Theme.types"

export const loaderStyles = {
  type: {
    [`${ThemeColorEnum.STANDARD}`]: "text-gray-500",
    [`${ThemeColorEnum.IMPORTANT}`]: "text-blue-500",
    [`${ThemeColorEnum.DANGEROUS}`]: "text-red-500",
  },
}
