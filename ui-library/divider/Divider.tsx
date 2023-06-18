import { dividerStyles } from "./Divider.styles"

export const Divider: React.FC = (divider) => {
  const styles = dividerStyles
  return <hr className={styles.className} />
}
