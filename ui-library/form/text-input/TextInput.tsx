import { Label } from "../label/Label"
import { textInputStyles } from "./TextInput.styles"
import { TextInputProps } from "./TextInput.types"

export const TextInput: React.FC<TextInputProps> = (textInput) => {
  const styles = textInputStyles
  return (
    <div>
      {textInput.label && (
        <Label
          htmlFor={textInput.label ? textInput.label : ""}
          value={textInput.label}
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
        autoFocus={textInput.autoFocus}
        onBlur={textInput.onBlur}
        maxLength={textInput.maxLength}
        className={styles.input}
      />
    </div>
  )
}
