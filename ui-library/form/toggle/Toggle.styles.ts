import { themeStyles } from "ui-library/_theme/Theme.styles"

export const toggleStyles = {
  container: "relative inline-flex items-center mb-5 cursor-pointer ",
  input: "sr-only peer",
  label: `ml-3 text-xs ${themeStyles.textColor.standard[600]}`,
  toggle: `${themeStyles.backgroundColor.standard[200]} rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all peer-checked:bg-blue-500`,
  size: {
    xs: "w-7 h-4 after:top-[2px] after:left-[2px] after:h-3 after:w-3",
    sm: "w-9 h-5 after:top-[2px] after:left-[2px] after:h-4 after:w-4",
    base: "w-11 h-6 after:top-[2px] after:left-[2px] after:h-5 after:w-5",
    lg: "w-14 h-7 after:top-[2px] after:left-[4px] after:h-6 after:w-6",
    xl: "w-16 h-8 after:top-[2px] after:left-[4px] after:h-7 after:w-7",
  },
}
