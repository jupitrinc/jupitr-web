import React from "react"
import { CheckboxGroupProps } from "./CheckboxGroup.types"
import { checkboxGroupStyles } from "./CheckboxGroup.styles"
import clsx from "clsx"
import { Checkbox } from "../checkbox/Checkbox"

export const CheckboxGroup: React.FC<CheckboxGroupProps> = (checkboxGroup) => {
  const styles = checkboxGroupStyles
  const last_item = checkboxGroup.items[checkboxGroup.items.length - 1]

  return (
    <ul className={styles.list}>
      {checkboxGroup.items.map((item) => (
        <li
          key={item.label}
          className={clsx(
            styles.list_item,
            last_item !== item && styles.list_item_border
          )}
        >
          <Checkbox
            label={item.label}
            checked={item.checked}
            onChange={item.onChange}
            name={item.name}
          />
        </li>
      ))}
    </ul>
  )
}
