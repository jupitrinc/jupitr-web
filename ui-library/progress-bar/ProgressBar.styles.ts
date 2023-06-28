import { themeStyles } from "ui-library/_theme/Theme.styles"

export const progressBarStyles = {
  container: `w-full h-4 mb-4 ${themeStyles.backgroundColor.standard[200]} rounded-full`,
  progress: `h-4 ${themeStyles.backgroundColor.special.default} rounded-full`,
}
