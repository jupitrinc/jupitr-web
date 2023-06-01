import { InputProps } from "./Input.types"

export const Input: React.FC<InputProps> = (input) => {
  let className =
    "p-3 w-full font-normal text-gray-600 rounded-xl ring-1 focus:outline-none focus:ring-gray-900/20 ring-gray-900/10 hover:ring-gray-900/20 disabled:cursor-not-allowed"
  className += input.invalid ? " border-orange-200" : ""
  className += input.className ? " " + input.className : ""
  return (
    <input
      type={input.type ? input.type : "text"}
      value={input.value}
      name={input.name}
      placeholder={input.placeholder}
      autoComplete={input.autoComplete}
      onChange={input.onChange}
      disabled={input.disabled}
      className={className}
      autoFocus={input.autoFocus}
      onBlur={input.onBlur}
      maxLength={input.maxLength}
      aria-label="input"
    />
  )
}
