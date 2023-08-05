import React from "react"
import clsx from "clsx"
import { LabelProps } from "./Label.types"
import { labelStyles } from "./Label.styles"

export const Label: React.FC<LabelProps> = (label) => {
  const styles = labelStyles

  return (
    <label
      htmlFor={label.htmlFor}
      className={clsx(
        styles.label,
        label.invalid ? styles.label_invalid : styles.label_valid
      )}
    >
      {label.value}
    </label>
  )
}
