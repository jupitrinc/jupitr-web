import { Button } from "ui-library/button/Button"
import { menuBarStyles } from "./MenuBar.styles"
import { MenuBarProps } from "./MenuBar.types"
import { Dropdown } from "../dropdown/Dropdown"

export const MenuBar: React.FC<MenuBarProps> = (menu) => {
  const styles = menuBarStyles
  const show_items = menu.items.slice(0, menu.max_number)
  const remaining_items = menu.items.length - show_items.length
  return (
    <div className={styles.container}>
      {show_items.map((item, index) => (
        <Button
          key={index}
          label={item.name}
          onClick={item.onClick}
          variant={menu.variant}
          size="sm"
        />
      ))}

      {remaining_items > 0 && (
        <Dropdown options={menu.items.slice(menu.max_number)} type="more" />
      )}
    </div>
  )
}
