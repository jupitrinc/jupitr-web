import { Button } from "ui-library/button/Button"
import { menuBarStyles } from "./MenuBar.styles"
import { MenuBarProps } from "./MenuBar.types"
import { Dropdown } from "../dropdown/Dropdown"

export const MenuBar: React.FC<MenuBarProps> = (menu) => {
  const styles = menuBarStyles
  const show_options = menu.options.slice(0, menu.max_number)
  const remaining_options = menu.options.length - show_options.length
  return (
    <div className={styles.container}>
      {show_options.map((option, index) => (
        <Button
          key={index}
          label={option.name}
          onClick={option.onClick}
          variant={menu.variant}
          size="sm"
        />
      ))}

      {remaining_options > 0 && (
        <Dropdown options={menu.options.slice(menu.max_number)} type="more" />
      )}
    </div>
  )
}
