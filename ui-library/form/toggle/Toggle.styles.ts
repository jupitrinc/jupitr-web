import { themeStyles } from "ui-library/_theme/Theme.styles"

export const toggleStyles = {
  container: "relative inline-flex cursor-pointer items-center",
  input: "peer sr-only",
  label: `ml-3 text-left md:text-base ${themeStyles.textColor.standard[500]}`,
  toggle: `${themeStyles.backgroundColor.standard[200]} rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all peer-checked:bg-gradient-to-r from-orange-400 to-rose-400`,
  size: {
    xs: "h-4 w-7 min-w-full after:left-[2px] after:top-[2px] after:h-3 after:w-3",
    sm: "h-4 w-7 min-w-full after:left-[2px] after:top-[2px] after:h-3 after:w-3",
    base: "h-6 w-11 min-w-full after:left-[2px] after:top-[2px] after:h-5 after:w-5",
    lg: "h-7 w-14 min-w-full after:left-[4px] after:top-[2px] after:h-6 after:w-6",
    xl: "h-8 w-16 min-w-full after:left-[4px] after:top-[2px] after:h-7 after:w-7",
  },
}
