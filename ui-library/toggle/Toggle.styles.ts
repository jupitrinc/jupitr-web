import { themeStyles } from "ui-library/__theme/Theme.styles"

export const toggleStyles = {
  container: "relative inline-flex items-center mb-5 cursor-pointer",
  input: "sr-only peer",
  span: "ml-3 text-sm font-medium text-gray-900",
  size: {
    small: `w-9 h-5 ${themeStyles.backgroundColor.standard[200]} rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500`,
    medium: `w-11 h-6 ${themeStyles.backgroundColor.standard[200]} rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500`,
    large: `w-14 h-7 ${themeStyles.backgroundColor.standard[200]} rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-500`,
  },
}
