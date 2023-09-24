import { themeStyles } from "ui-library/_theme/Theme.styles"

export const progressBarStyles = {
  default: {
    container: `relative w-full h-4 ${themeStyles.backgroundColor.standard[200]} rounded-full`,
    progress: `h-4 ${themeStyles.backgroundColor.special.default} rounded-full transition-all ease-out duration-1000`,
    threshold: `w-full h-4 opacity-30 rounded-full ${themeStyles.backgroundColor.special.default} transition-all ease-out duration-1000`,
    threshold_container: "absolute flex top-0 left-0 justify-end",
  },

  sticky: {
    container: "absolute right-0 top-0 left-0 rounded-t-lg overflow-hidden",
    bar: `w-full h-2 ${themeStyles.backgroundColor.standard[200]} bg-opacity-25`,
    progress: `h-2 ${themeStyles.backgroundColor.special.default} transition-all ease-out duration-1000`,
  },
}
