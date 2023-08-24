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
        name={form.name}
        type={form.type}
        onChange={form.onChange}
        placeholder={form.placeholder}
        disabled={form.disabled}
        maxLength={form.maxLength}
        autoFocus={form.autoFocus}
        required={form.required}
      />
      <div className={styles.buttonContainer}>
        <Button
          type="submit"
          icon={form.icon}
          disabled={form.disabled}
          loading={form.loading}
        />
      </div>
    </form>
  )
}
