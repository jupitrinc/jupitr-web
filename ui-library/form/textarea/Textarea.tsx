import React from "react"
import { TextAreaProps } from "./Textarea.types"
import { textareaStyles } from "./Textarea.styles"
import { Label } from "../label/Label"

export const Textarea: React.FC<TextAreaProps> = (textarea) => {
  const styles = textareaStyles

  return (
    <div className={styles.container}>
      {textarea.label && (
        <Label htmlFor={textarea.label} value={textarea.label} />
      )}
      <textarea
        id={textarea.label}
        value={textarea.value}
        defaultValue={textarea.defaultValue}
        name={textarea.name}
        placeholder={textarea.placeholder}
        disabled={textarea.disabled}
        autoFocus={textarea.autoFocus}
        maxLength={textarea.maxLength}
        onChange={textarea.onChange}
        cols={30}
        rows={5}
        className={styles.textarea}
      />
    </div>
  )
}
