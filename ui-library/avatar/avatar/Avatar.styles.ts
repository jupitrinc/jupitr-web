import { themeStyles } from "ui-library/__theme/Theme.styles"

export const avatarStyles = {
  container: `inline-flex overflow-hidden justify-center items-center ${themeStyles.backgroundColor.standard[100]} rounded-full ${themeStyles.textColor.standard[600]} border-2 border-white`,
  icon: "font-medium text-gray-300",
  image: "object-cover",
  size: (size: number) => `w-${size} h-${size}`,
}
