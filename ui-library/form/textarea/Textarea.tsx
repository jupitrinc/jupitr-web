import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react"
import { TextAreaProps } from "./Textarea.types"
import { textareaStyles } from "./Textarea.styles"
import { Label } from "../label/Label"

export const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (textarea, ref) => {
    const styles = textareaStyles

    const innerRef = useRef<HTMLTextAreaElement>(null)
    useImperativeHandle(ref, () => innerRef.current as HTMLTextAreaElement)

    useEffect(() => {
      if (innerRef.current && textarea.autoFocus) innerRef.current.focus()
      if (innerRef.current && !textarea.autoFocus) innerRef.current.blur()
    }, [textarea.autoFocus])

    return (
      <div className={styles.container}>
        {textarea.label && (
          <Label
            htmlFor={textarea.label}
            value={textarea.label}
            invalid={textarea.invalid}
          />
        )}
        <textarea
          id={textarea.label}
          value={textarea.value}
          defaultValue={textarea.defaultValue}
          name={textarea.name}
          placeholder={textarea.placeholder}
          disabled={textarea.disabled}
          maxLength={textarea.maxLength}
          onChange={textarea.onChange}
          cols={30}
          rows={5}
          className={styles.textarea}
          onBlur={textarea.onBlur}
          ref={innerRef}
        />
      </div>
    )
  }
)
