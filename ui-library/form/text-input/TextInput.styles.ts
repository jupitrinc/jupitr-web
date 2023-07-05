import { themeStyles } from "ui-library/_theme/Theme.styles"

export const textInputStyles = {
  container: "space-y-2",
  input: `block p-2.5 w-full text-base ${themeStyles.textColor.standard[600]} ${themeStyles.backgroundColor.standard[50]} ${themeStyles.border.standard} ${themeStyles.disabled}`,
  lightInput: `block p-2.5 w-full text-lg text-center text-gray-600 hover:bg-gray-50 focus:bg-gray-50 hover:${themeStyles.border.standard} ${themeStyles.disabled}`,
}
