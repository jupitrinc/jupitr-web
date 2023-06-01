import { Loader } from "../loader/Loader"
import { ButtonProps } from "./Button.types"

export const Button: React.FC<ButtonProps> = (button) => {
  return (
    <button
      onClick={button.onClick}
      disabled={button.disabled || button.loading}
      className="px-3 py-2 text-sm rounded-full text-gray-500 hover:text-gray-600 disabled:hover:text-gray-500  ring-gray-900/10 hover:ring-gray-900/20 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 disabled:hover:bg-gray-50 disabled:cursor-not-allowed"
      data-testid={button.testId}
    >
      {button.loading ? <Loader /> : button.label}
    </button>
  )
}
