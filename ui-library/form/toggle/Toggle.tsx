import React from "react"
import clsx from "clsx"
import { ToggleProps } from "./Toggle.types"
import { toggleStyles } from "./Toggle.styles"
import { ThemeSizeEnum } from "ui-library/_theme/Theme.types"

export const Toggle: React.FC<ToggleProps> = ({
  disabled,
  checked,
  onChange,
  size = ThemeSizeEnum.sm,
  label,
}) => {
  const styles = toggleStyles

  return (
    <label className={styles.container}>
      <div className="relative">
        <input
          type="checkbox"
          className={styles.input}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
        />
        <div className={clsx(styles.size[size], styles.toggle)} />
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  )
}
