import { themeStyles } from "ui-library/_theme/Theme.styles"

export const tabsStyles = {
  container: "flex-1 px-2",
  tab_list: `flex rounded-full overflow-hidden ${themeStyles.backgroundColor.standard[200]}`,
  tab: `w-full rounded-full font-medium ${themeStyles.textColor.standard[500]} border border-1 border-gray-200 p-0.5 ring-white ring-opacity-60 focus:outline-none hover:bg-gray-100`,
  tab_active: themeStyles.backgroundColor.standard[50],
  size: {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  },
}
