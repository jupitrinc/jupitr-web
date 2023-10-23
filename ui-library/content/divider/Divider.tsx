import { Theme } from "ui-library/_theme/Theme.types"
import { dividerStyles } from "./Divider.styles"

interface props {
  theme?: Theme
}

export const Divider: React.FC<props> = ({ theme }) => {
  const styles = dividerStyles
  return <hr className={styles[theme ?? "light"]} />
}
