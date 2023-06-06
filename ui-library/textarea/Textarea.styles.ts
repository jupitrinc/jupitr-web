import { themeStyles } from "ui-library/_theme/Theme.styles"

export const textareaStyles = {
  label: `block mb-2 text-sm font-medium ${themeStyles.textColor.standard[500]}`,
  textarea: `block p-2.5 w-full text-sm ${themeStyles.textColor.standard[500]} ${themeStyles.backgroundColor.standard[50]} ${themeStyles.border.standard} ${themeStyles.disabled.standard} focus:ring-blue-500 focus:border-blue-500`,
}
