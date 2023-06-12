import React from "react"
import { SelectProps } from "./Select.types"
import { selectStyles } from "./Select.styles"
import { Label } from "../label/Label"
import { stringHelper } from "helper/stringHelper"

export const Select: React.FC<SelectProps> = (select) => {
  const styles = selectStyles
  const { randomHash } = stringHelper

  return (
    <>
      <Label htmlFor={randomHash()} value={select.label} />
      <select
        id={randomHash()}
        name={select.name}
        className={styles.select}
        disabled={select.disabled}
      >
        {select.options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </>
  )
}
