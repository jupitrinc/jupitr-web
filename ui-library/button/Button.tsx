import clsx from "clsx"
import { Loader } from "../loader/Loader"
import { ButtonProps } from "./Button.types"
import { buttonStyles } from "./Button.styles"

export const Button: React.FC<ButtonProps> = (button) => {
  const styles = buttonStyles
  return (
    <button
      type="button"
      className={clsx(
        button.label ? styles.button : styles.icon_button,
        styles.variant[
          button.variant ? button.variant : styles.variant.contained
        ],
        styles.type[button.type ? button.type : styles.type.default],
        button.label &&
          styles.size[button.size ? button.size : styles.size.small],
        button.full_width && styles.width.full,
        !button.label ? styles.rounded.full : styles.rounded.xl
      )}
      onClick={button.onClick}
      disabled={button.disabled || button.loading}
    >
      {button.icon && !button.loading && button.icon}
      {button.loading && (
        <Loader type={button.type} className={styles.loader} />
      )}
      <span>{button.label}</span>

      {button.arrow && <span aria-hidden="true">&rarr;</span>}
    </button>
  )
}
