import { ThemeColorEnum } from "ui-library/_theme/Theme.types"

export const cardBaseStyles = {
  container: "rounded-lg cursor-pointer overflow-hidden",
  active: "ring-gray-900/20 bg-gray-100",
  color: {
    [`${ThemeColorEnum.standard}`]:
      "ring-1 ring-gray-900/10 hover:ring-gray-900/20 hover:bg-gray-100",
    [`${ThemeColorEnum.important}`]:
      "ring-1 ring-blue-900/10 hover:ring-blue-900/20 hover:bg-blue-100",
    [`${ThemeColorEnum.dangerous}`]:
      "ring-1 ring-red-900/10 hover:ring-red-900/20 hover:bg-red-100",
  },
}
