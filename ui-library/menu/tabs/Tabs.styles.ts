import { themeStyles } from "ui-library/_theme/Theme.styles"

export const tabsStyles = {
  container: "flex-1",
  tab_list: `flex rounded-lg overflow-hidden ${themeStyles.backgroundColor.standard[100]} space-x-1`,
  tab: `w-full rounded-lg ${themeStyles.textColor.standard[600]} border border-1 py-1 px-2 border-gray-100 p-0.5 ring-white ring-opacity-60 focus:outline-none hover:bg-gray-50`,
  tab_active: `${themeStyles.backgroundColor.special.default} text-white`,
  size: {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  },
}
