import React from "react"
import { LightFormProps } from "./LightForm.types"
import { labelStyles } from "./LightForm.styles"
import { Button } from "ui-library/button/Button"
import { TextInput } from "../text-input/TextInput"

export const LightForm: React.FC<LightFormProps> = (form) => {
  const styles = labelStyles

  return (
    <form onSubmit={form.onSubmit} className={styles.form}>
      <TextInput
        value={form.value}
        onChange={form.onChange}
        placeholder={form.placeHolder}
        disabled={form.disabled}
        maxLength={form.maxLength}
        label={form.label}
      />
      <div className={styles.buttonContainer}>
        <Button
          onClick={form.onClick}
          icon={form.icon}
          disabled={form.disabled}
          loading={form.disabled}
        />
      </div>
    </form>
  )
}
