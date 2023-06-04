import React from "react"
import { SelectProps } from "./Select.types"
import { selectStyles } from "./Select.styles"

export const Select: React.FC<SelectProps> = (select) => {
  const styles = selectStyles
  const randomHash = (Math.random() + 1).toString(36).substring(7)

  return (
    <>
      <label
        htmlFor={select.label ? select.label : randomHash}
        className={styles.label}
      >
        {select.label ? select.label : ""}
      </label>
      <select value={select.value} id={randomHash} className={styles.select}>
        <option selected disabled>
          Choose a value
        </option>
        {select.options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </>
  )
}
