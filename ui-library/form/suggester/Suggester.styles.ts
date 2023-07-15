import { themeStyles } from "ui-library/_theme/Theme.styles"

export const suggesterStyles = {
  container: `relative mt-1`,
  suggester: `relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm`,
  input: `w-full border-none py-2 pl-3 pr-10 text-sm leading-5 ${themeStyles.textColor[600]} focus:ring-0`,
  button: `absolute inset-y-0 right-0 flex items-center pr-2`,
  options: `relative cursor-default select-none py-2 ${themeStyles.textColor[500]}`,
  option: {
    default: `relative cursor-default select-none py-2 pl-10 pr-4 bg-white ${themeStyles.textColor[600]}`,
    active: `relative cursor-default select-none py-2 pl-10 pr-4 ${themeStyles.backgroundColor.important[50]} ${themeStyles.textColor[500]}`,
    noResult: `relative cursor-default select-none py-2 px-4 ${themeStyles.textColor[500]}`,
  },
  pillContainer: `mt-4 flex gap-2`,
}
