import { themeStyles } from "ui-library/_theme/Theme.styles"

export const videoPlayerStyles = {
  container: "w-full group cursor-pointer relative",
  player: "h-full w-full object-cover rounded-lg",
  play_button:
    "absolute right-1/2 top-1/2 transform -translate-y-1/2 transition-[transform, opacity] group-hover:scale-125 ease-in-out fade-in-out duration-500",
  progress_bar: {
    container: "absolute right-0 top-0 left-0 rounded-t-lg overflow-hidden",
    bar: `w-full h-2 ${themeStyles.backgroundColor.standard[200]} bg-opacity-25`,
    progress: `h-2 ${themeStyles.backgroundColor.special.default}`,
  },
}
