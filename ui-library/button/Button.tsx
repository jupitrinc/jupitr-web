import clsx from "clsx"
import { Loader } from "../loader/Loader"
import { ButtonProps } from "./Button.types"
import { buttonStyles } from "./Button.styles"
import {
  ThemeColorEnum,
  ThemeSizeEnum,
  ThemeVariantEnum,
} from "ui-library/_theme/Theme.types"

export const Button: React.FC<ButtonProps> = (button) => {
  const styles = buttonStyles
  return (
    <button
      type={button.type ? button.type : "button"}
      className={clsx(
        button.label ? styles.button : styles.icon_button,
        styles.variant[
          button.variant ? button.variant : ThemeVariantEnum.contained
        ],
        styles.color[button.color ? button.color : ThemeColorEnum.standard],
        button.label &&
          styles.size[button.size ? button.size : ThemeSizeEnum.sm],
        button.full_width && styles.width.full,
        !button.label ? styles.rounded.full : styles.rounded.lg
      )}
      onClick={button.onClick}
      disabled={button.disabled || button.loading}
    >
      {button.icon && !button.loading && button.icon}
      {button.loading && (
        <Loader color={button.color} className={styles.loader} />
      )}
      <span>{button.label}</span>

      {button.arrow && <span aria-hidden="true">&rarr;</span>}
    </button>
  )
}
