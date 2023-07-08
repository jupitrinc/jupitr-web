import { Label } from "../label/Label"
import { textInputStyles } from "./TextInput.styles"
import { TextInputProps } from "./TextInput.types"

export const TextInput: React.FC<TextInputProps> = (textInput) => {
  const styles = textInputStyles
  return (
    <div className={styles.container}>
      {textInput.label && (
        <Label htmlFor={textInput.label} value={textInput.label} />
      )}
      <input
        type={textInput.type ? textInput.type : "text"}
        value={textInput.value}
        name={textInput.name}
        placeholder={textInput.placeholder}
        onChange={textInput.onChange}
        autoComplete={textInput.autoComplete}
        disabled={textInput.disabled}
        autoFocus={textInput.autoFocus}
        onBlur={textInput.onBlur}
        maxLength={textInput.maxLength}
        className={textInput.light ? styles.lightInput : styles.input}
      />
    </div>
  )
}
