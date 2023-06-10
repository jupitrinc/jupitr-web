import React from "react"
import { CheckboxProps } from "./Checkbox.types"
import { checkboxStyles } from "./Checkbox.styles"

export const Checkbox: React.FC<CheckboxProps> = (checkbox) => {
  const styles = checkboxStyles

  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        checked={checkbox.checked}
        name={checkbox.name}
        onChange={checkbox.onChange}
        className={styles.checkbox}
      />
      <span className={styles.label}>{checkbox.label}</span>
    </label>
  )
}
