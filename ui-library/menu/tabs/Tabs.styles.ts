import { themeStyles } from "ui-library/_theme/Theme.styles"

export const tabsStyles = {
  container: "flex-1",
  tab_list: `flex rounded-lg overflow-hidden ${themeStyles.backgroundColor.standard[200]}`,
  tab: `w-full rounded-lg ${themeStyles.textColor.standard[500]} border border-1 border-gray-200 p-0.5 ring-white ring-opacity-60 focus:outline-none hover:bg-gray-100`,
  tab_active: themeStyles.backgroundColor.standard[50],
  size: {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  },
}
