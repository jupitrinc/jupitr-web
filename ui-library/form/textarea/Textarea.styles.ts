import { themeStyles } from "ui-library/_theme/Theme.styles"

export const textareaStyles = {
  container: "space-y-2 text-left",
  textarea: `block p-2.5 w-full text-base ${themeStyles.textColor.standard[600]} ${themeStyles.backgroundColor.standard[50]} ${themeStyles.border.standard} ${themeStyles.disabled}`,
}
