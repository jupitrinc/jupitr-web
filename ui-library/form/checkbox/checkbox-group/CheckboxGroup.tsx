import React from "react"
import { CheckboxGroupProps } from "./CheckboxGroup.types"
import { checkboxGroupStyles } from "./CheckboxGroup.styles"
import { Checkbox } from "../checkbox/Checkbox"

export const CheckboxGroup: React.FC<CheckboxGroupProps> = (checkboxGroup) => {
  const styles = checkboxGroupStyles

  return (
    <fieldset className={styles.list}>
      {checkboxGroup.options.map((item) => (
        <div key={item.label}>
          <Checkbox
            value={item.value}
            label={item.label}
            name={item.label}
            checked={item.checked}
            onChange={item.onChange}
          />
        </div>
      ))}
    </fieldset>
  )
}
