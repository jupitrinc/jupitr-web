import React from "react"
import { LabelProps } from "./Label.types"
import { labelStyles } from "./Label.styles"

export const Label: React.FC<LabelProps> = (label) => {
  const styles = labelStyles

  return (
    <label htmlFor={label.htmlFor} className={styles.label}>
      {label.value}
    </label>
  )
}
