import { InputProps } from "./Input.types"

export const Input: React.FC<InputProps> = (input) => {
  return (
    <input
      type={"text"}
      value={input.value}
      name={input.name}
      placeholder={input.placeholder}
      onChange={input.onChange}
      autoComplete={input.autoComplete}
      disabled={input.disabled}
      autoFocus={input.autoFocus}
      onBlur={input.onBlur}
      maxLength={input.maxLength}
      className="p-3 w-full font-normal text-gray-600 rounded-xl ring-1 focus:outline-none focus:ring-gray-900/20 ring-gray-900/10 hover:ring-gray-900/20 disabled:cursor-not-allowed"
    />
  )
}
