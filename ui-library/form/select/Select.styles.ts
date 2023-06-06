import { themeStyles } from "ui-library/_theme/Theme.styles"

export const selectStyles = {
  label: `block mb-2 text-xs ${themeStyles.textColor.standard[500]}`,
  select: `${themeStyles.backgroundColor.standard[50]} ${themeStyles.textColor.standard[600]} text-sm block w-full p-3 ${themeStyles.border.standard} ${themeStyles.disabled}`,
}
