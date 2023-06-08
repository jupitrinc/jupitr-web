import React from "react"
import clsx from "clsx"
import { ToggleProps } from "./Toggle.types"
import { toggleStyles } from "./Toggle.styles"
import { ThemeSizeEnum } from "ui-library/_theme/Theme.types"

export const Toggle: React.FC<ToggleProps> = (toggle) => {
  const styles = toggleStyles

  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        className={styles.input}
        disabled={toggle.disabled}
      />
      <div
        className={clsx(
          styles.size[toggle.size ? toggle.size : ThemeSizeEnum.sm],
          styles.toggle
        )}
      />
      {toggle.label && <span className={styles.label}>{toggle.label}</span>}
    </label>
  )
}
