import { themeStyles } from "ui-library/_theme/Theme.styles"

export const selectStyles = {
  container: "space-y-2 text-left",
  select: `${themeStyles.backgroundColor.standard[50]} ${themeStyles.textColor.standard[600]} text-base block w-full p-2.5 ${themeStyles.border.standard} ${themeStyles.disabled}`,
}
