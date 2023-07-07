import React from "react"
import { SelectProps } from "./Select.types"
import { selectStyles } from "./Select.styles"
import { Label } from "../label/Label"

export const Select: React.FC<SelectProps> = (select) => {
  const styles = selectStyles

  return (
    <div className={styles.container}>
      {select.label && <Label htmlFor={select.label} value={select.label} />}
      <select
        name={select.name}
        className={styles.select}
        disabled={select.disabled}
      >
        {select.options.map((item) => (
          <option key={item}>{`${item}${
            select.magic_word ? " " + select.magic_word : ""
          }`}</option>
        ))}
      </select>
    </div>
  )
}
