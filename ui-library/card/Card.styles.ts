import { ThemeColorEnum } from "ui-library/_theme/Theme.types"

export const cardBaseStyles = {
  container: "rounded-lg cursor-pointer overflow-hidden",
  color: {
    [`${ThemeColorEnum.standard}`]:
      "ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-gray-50 hover:bg-gray-100",
    [`${ThemeColorEnum.important}`]:
      "ring-1 ring-blue-900/10 hover:ring-blue-900/20 bg-blue-50 hover:bg-blue-100",
    [`${ThemeColorEnum.dangerous}`]:
      "ring-1 ring-red-900/10 hover:ring-red-900/20 bg-red-50 hover:bg-red-100",
  },
}
