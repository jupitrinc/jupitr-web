import { themeStyles } from "ui-library/_theme/Theme.styles"

export const multiselectStyles = {
  container: `relative mt-1`,
  suggester: `relative w-full cursor-default overflow-hidden rounded-lg text-left ${themeStyles.border.standard} ${themeStyles.disabled}`,
  input: `w-full border-none py-2 pl-3 pr-10 text-base ${themeStyles.backgroundColor.standard[50]} ${themeStyles.textColor[600]} ${themeStyles.border.standard} ${themeStyles.disabled}`,
  button: `absolute inset-y-0 right-0 flex items-center pr-2`,
  options: `relative cursor-default select-none py-2 ${themeStyles.textColor[500]}`,
  option: {
    default: `text-left relative cursor-default select-none py-2 pl-5 pr-5 bg-white ${themeStyles.textColor[600]}`,
    active: `text-left relative cursor-default select-none py-2 pl-5 pr-5 ${themeStyles.backgroundColor.standard[50]} ${themeStyles.textColor[500]}`,
    noResult: `text-left relative cursor-default select-none py-5 px-5 ${themeStyles.textColor[500]}`,
  },
  pillContainer: `mt-4 flex gap-2 flex-wrap`,
}
