import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"
import { Label } from "../label/Label"
import { textInputStyles } from "./TextInput.styles"
import { TextInputProps } from "./TextInput.types"

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (textInput, ref) => {
    const styles = textInputStyles

    const innerRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => innerRef.current as HTMLInputElement)

    useEffect(() => {
      if (innerRef.current && textInput.autoFocus) innerRef.current.focus()
      if (innerRef.current && !textInput.autoFocus) innerRef.current.blur()
    }, [textInput.autoFocus])

    return (
      <div className={styles.container}>
        {textInput.label && (
          <Label
            htmlFor={textInput.label}
            value={textInput.label}
            invalid={textInput.invalid}
          />
        )}
        <input
          type={textInput.type ? textInput.type : "text"}
          value={textInput.value}
          name={textInput.name}
          placeholder={textInput.placeholder}
          onChange={textInput.onChange}
          autoComplete={textInput.autoComplete}
          disabled={textInput.disabled}
          onBlur={textInput.onBlur}
          maxLength={textInput.maxLength}
          className={textInput.light ? styles.lightInput : styles.input}
          required={textInput.required}
          ref={innerRef}
        />
      </div>
    )
  }
)
