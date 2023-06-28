import { themeStyles } from "ui-library/_theme/Theme.styles"

export const checkboxStyles = {
  checkbox: "hidden peer",
  label: `flex p-3 text-lg justify-center text-gray-600 border-0 ring-1 rounded-lg ring-gray-900/10 hover:ring-gray-900/20 cursor-pointer peer-checked:ring-0 peer-checked:text-white peer-checked:${themeStyles.backgroundColor.special.default} hover:bg-gray-50`,
}
