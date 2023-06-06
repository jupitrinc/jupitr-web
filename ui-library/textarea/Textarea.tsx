import React from "react"
import { TextAreaProps } from "./Textarea.types"
import { textareaStyles } from "./Textarea.styles"

export const Textarea: React.FC<TextAreaProps> = (textarea) => {
  const styles = textareaStyles
  const randomHash = (Math.random() + 1).toString(36).substring(7)

  return (
    <>
      <label
        htmlFor={textarea.label ? textarea.label : randomHash}
        className={styles.label}
      >
        {textarea.label ? textarea.label : ""}
      </label>
      <textarea
        id={randomHash}
        value={textarea.value}
        name={textarea.name}
        placeholder={textarea.placeholder}
        disabled={textarea.disabled}
        autoFocus={textarea.autoFocus}
        maxLength={textarea.maxLength}
        cols={30}
        rows={10}
        className={styles.textarea}
      />
    </>
  )
}
