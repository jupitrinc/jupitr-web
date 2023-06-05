import { themeStyles } from "ui-library/__theme/Theme.styles"

export const progressBarStyles = {
  container: `w-full h-4 mb-4 ${themeStyles.backgroundColor.standard[200]} rounded-full`,
  progress: `h-4 ${themeStyles.backgroundColor.important[500]} rounded-full`,
}
