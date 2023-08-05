import { themeStyles } from "ui-library/_theme/Theme.styles"

export const multiselectStyles = {
  container: `relative text-left space-y-2`,
  multiselect: `relative w-full cursor-default overflow-hidden  rounded-lg text-left ${themeStyles.border.standard} ${themeStyles.disabled}`,
  input: `w-full border-none py-2.5 pl-3 pr-10 text-base ${themeStyles.backgroundColor.standard[50]} ${themeStyles.textColor.standard[600]} ${themeStyles.border.standard} ${themeStyles.disabled}`,
  button: `absolute inset-y-0 right-0 flex items-center pr-2`,
  options: `absolute ring-1 ring-gray-300 max-h-40 overflow-y-auto w-full select-none py-2 ${themeStyles.textColor.standard[600]} ${themeStyles.backgroundColor.standard[100]} rounded-lg`,
  option: {
    default: `text-left relative cursor-pointer select-none py-2 px-5`,
    active: `text-left relative cursor-pointer select-none py-2 px-5 bg-gray-200`,
    noResult: `text-left relative select-none py-2 px-5`,
  },
}
