import { themeStyles } from "ui-library/_theme/Theme.styles"

export const stepStyles = {
  default: {
    container: `flex items-center ${themeStyles.textColor.standard[500]} space-x-2.5`,
    number: `flex items-center justify-center w-8 h-8 border border-grey-500 rounded-full shrink-0`,
    label: `font-medium leading-tight`,
  },
  active: {
    container: `flex items-center ${themeStyles.textColor.important[500]} space-x-2.5`,
    number: `flex items-center justify-center w-8 h-8 border border-blue-500 rounded-full shrink-0`,
    label: `font-medium leading-tight`,
  },
}
