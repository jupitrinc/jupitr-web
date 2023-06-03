export const buttonStyles = {
  button:
    "font-medium flex-1 space-x-2 focus:outline-none ease-in-out disabled:cursor-not-allowed disabled:text-opacity-50 disabled:hover:text-opacity-50",
  icon_button:
    "font-medium p-3 text-center inline-flex items-center focus:outline-none ease-in-out disabled:cursor-not-allowed disabled:text-opacity-50 disabled:hover:text-opacity-50",

  variant: {
    text: "bg-opacity-0",
    outlined: "ring-1 bg-opacity-0",
    contained: "",
  },
  type: {
    default:
      "text-gray-500 hover:text-gray-600 ring-gray-900/10 hover:ring-gray-900/20 bg-gray-50 hover:bg-gray-100 active:bg-gray-200",
    important:
      "text-blue-500 hover:text-blue-600 ring-blue-900/10 hover:ring-blue-900/20 bg-blue-50 hover:bg-blue-100 active:bg-blue-200",
    dangerous:
      "text-red-500 hover:text-red-600 ring-red-900/10 hover:ring-red-900/20 bg-red-50 hover:bg-red-100 active:bg-red-200",
  },
  rounded: {
    xl: "rounded-xl",
    full: "rounded-full",
  },
  size: {
    small: "px-3 py-2 text-sm",
    medium: "px-5 py-2 text-md",
    large: "px-7 py-2 text-lg",
  },
  width: {
    full: "w-full",
  },
}
