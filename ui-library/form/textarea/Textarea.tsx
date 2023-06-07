import React from "react"
import { TextAreaProps } from "./Textarea.types"
import { textareaStyles } from "./Textarea.styles"
import { Label } from "../label/Label"
import { stringHelper } from "helper/stringHelper"

export const Textarea: React.FC<TextAreaProps> = (textarea) => {
  const styles = textareaStyles
  const { randomHash } = stringHelper

  return (
    <>
      {textarea.label && (
        <Label htmlFor={randomHash()} value={textarea.label} />
      )}
      <textarea
        id={randomHash()}
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
