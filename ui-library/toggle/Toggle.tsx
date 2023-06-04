import React from "react"
import { ToggleProps } from "./Toggle.types"
import { toggleStyles } from "./Toggle.styles"

export const Toggle: React.FC<ToggleProps> = (toggle) => {
  const styles = toggleStyles

  return (
    <label className={styles.container}>
      <input type="checkbox" value={toggle.value} className="sr-only peer" />
      <div
        className={styles.size[toggle.size ? toggle.size : styles.size.default]}
      />
      <span className={styles.span}>{toggle.label}</span>
    </label>
  )
}
