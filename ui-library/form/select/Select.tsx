import React from "react"
import { SelectProps } from "./Select.types"
import { selectStyles } from "./Select.styles"
import { Label } from "../label/Label"

export const Select: React.FC<SelectProps> = (select) => {
  const styles = selectStyles

  const getName = (option) => {
    if (typeof option === "object") {
      return option.name
    }

    return option
  }

  const getId = (option) => {
    if (typeof option === "object") {
      return option.id
    }

    return option
  }

  return (
    <div className={styles.container}>
      {select.label && (
        <Label
          htmlFor={select.label}
          value={select.label}
          invalid={select.invalid}
        />
      )}
      <select
        name={select.name}
        className={styles.select}
        value={JSON.stringify(select.value) || select.placeholder}
        onChange={select.onChange}
        disabled={select.disabled}
      >
        <option value={select.placeholder} disabled>
          {select.placeholder}
        </option>
        {select.options.map((option) => (
          <option
            key={getId(option)}
            value={JSON.stringify(option)}
          >{`${getName(option)}${
            select.magic_word ? " " + select.magic_word : ""
          }`}</option>
        ))}
      </select>
    </div>
  )
}
