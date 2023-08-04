import { Label } from "../label/Label"
import { numberInputStyles } from "./NumberInput.styles"
import { NumberInputProps } from "./NumberInput.types"

export const NumberInput: React.FC<NumberInputProps> = (input) => {
  const styles = numberInputStyles
  return (
    <div className={styles.container}>
      {input.label && (
        <Label htmlFor={input.label ? input.label : ""} value={input.label} />
      )}
      <input
        type="number"
        value={input.value}
        name={input.name}
        placeholder={input.placeholder}
        onChange={input.onChange}
        autoComplete={input.autoComplete}
        disabled={input.disabled}
        autoFocus={input.autoFocus}
        onBlur={input.onBlur}
        className={styles.input}
      />
    </div>
  )
}
