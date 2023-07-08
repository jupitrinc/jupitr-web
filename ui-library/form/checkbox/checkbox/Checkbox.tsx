import React from "react"
import { CheckboxProps } from "./Checkbox.types"
import { checkboxStyles } from "./Checkbox.styles"

export const Checkbox: React.FC<CheckboxProps> = (checkbox) => {
  const styles = checkboxStyles

  return (
    <label>
      <input
        type="checkbox"
        defaultChecked={checkbox.checked}
        name={checkbox.label}
        value={checkbox.value}
        onChange={checkbox.onChange}
        className={styles.checkbox}
      />
      <span className={styles.label}>{checkbox.label}</span>
    </label>
  )
}
