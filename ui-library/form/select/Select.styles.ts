import { themeStyles } from "ui-library/_theme/Theme.styles"

export const selectStyles = {
  container: "space-y-2 text-left",
  select: `${themeStyles.backgroundColor.standard[50]} ${themeStyles.textColor.standard[600]} min-w-[100px] bg-[url('/icons/chevrons-up-down.svg')] bg-center block w-full appearance-none bg-no-repeat !bg-[98.5%_50%] invalid:text-gray-400 ${themeStyles.border.standard} ${themeStyles.disabled}`,
  size: {
    sm: "px-1.5 py-1 text-sm bg-[length:16px]",
    base: "p-2.5 text-base bg-[length:20px]",
  },
}
