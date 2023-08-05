import { themeStyles } from "ui-library/_theme/Theme.styles"

export const selectStyles = {
  container: "space-y-2 text-left",
  select: `${themeStyles.backgroundColor.standard[50]} ${themeStyles.textColor.standard[600]} bg-[url('/icons/chevrons-up-down.svg')] bg-center text-base block w-full p-2.5 appearance-none bg-[length:20px] bg-no-repeat !bg-[98.5%_50%] invalid:text-gray-400 ${themeStyles.border.standard} ${themeStyles.disabled}`,
}
