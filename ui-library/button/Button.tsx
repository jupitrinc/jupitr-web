import { Loader } from "ui-library/loader/Loader"
import { ButtonProps } from "./Button.types"

export const Button: React.FC<ButtonProps> = (button) => {
  const size = {
    small: button.label ? "px-3 py-2 text-sm" : "px-2 py-2",
    medium: button.label ? "px-5 py-2 text-md" : "px-2 py-2",
    large: button.label ? "px-7 py-2 text-lg" : "px-2 py-2",
  }
  const variant = {
    outlined: `${
      button.label ? "rounded-xl" : "rounded-full"
    } ring-1 bg-opacity-0`,
    text: `${button.label ? "rounded-xl" : "rounded-full"} bg-opacity-0`,
    contained: `${button.label ? "rounded-xl" : "rounded-full"}`,
  }

  const type = {
    default:
      "text-gray-500 hover:text-gray-600 ring-gray-900/10 hover:ring-gray-900/20 bg-gray-50 hover:bg-gray-100 active:bg-gray-200",
    success:
      "text-green-600 hover:text-green-700 ring-green-900/10 hover:ring-green-900/20 bg-green-100 hover:bg-green-100 active:bg-green-200",
    info: "text-blue-500 hover:text-blue-600 ring-blue-900/10 hover:ring-blue-900/20 bg-blue-50 hover:bg-blue-100 active:bg-blue-200",
    warning:
      "text-orange-500 hover:text-orange-600 ring-orange-900/10 hover:ring-orange-900/20 bg-orange-50 hover:bg-orange-100 active:bg-orange-200",
    danger:
      "text-red-500 hover:text-red-600 ring-red-900/10 hover:ring-red-900/20 bg-red-50 hover:bg-red-100 active:bg-red-200",
  }

  let className = "font-medium focus:outline-none ease-in-out"
  className += " " + (button.size ? size[button.size] : size["small"])
  className += " " + (button.type ? type[button.type] : type["default"])
  className +=
    " " + (button.variant ? variant[button.variant] : variant["text"])

  if (button.disabled || button.loading) {
    className += " cursor-not-allowed text-opacity-50 hover:text-opacity-50"
  }

  if (button.fullWidth) {
    className += " w-full"
  }

  return (
    <button
      type="button"
      className={className}
      onClick={button.onClick}
      disabled={button.disabled || button.loading}
    >
      {button.icon && !button.loading && button.icon}
      {button.loading && <Loader />}
      {button.label}

      {button.arrow && (
        <span aria-hidden="true" className={button.label ? "ml-3" : ""}>
          &rarr;
        </span>
      )}
    </button>
  )
}
