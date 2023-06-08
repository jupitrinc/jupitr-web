import { stringHelper } from "helper/stringHelper"
import { Label } from "../label/Label"
import { textInputStyles } from "./TextInput.styles"
import { TextInputProps } from "./TextInput.types"

export const TextInput: React.FC<TextInputProps> = (textInput) => {
  const { randomHash } = stringHelper
  const styles = textInputStyles
  return (
    <>
      {textInput.label && (
        <Label htmlFor={randomHash()} value={textInput.label} />
      )}
      <input
        type={"text"}
        value={textInput.value}
        name={textInput.name}
        placeholder={textInput.placeholder}
        onChange={textInput.onChange}
        autoComplete={textInput.autoComplete}
        disabled={textInput.disabled}
        autoFocus={textInput.autoFocus}
        onBlur={textInput.onBlur}
        maxLength={textInput.maxLength}
        className={styles.input}
      />
    </>
  )
}
