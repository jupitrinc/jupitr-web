import Datepicker from "./extras/components/Datepicker"
import { DatePickerProps } from "./DatePicker.types"

export const DatePicker: React.FC<DatePickerProps> = (datePicker) => {
  let inputClassName =
    "relative w-28 rounded-xl px-3 py-2 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 focus:ring-gray-900/20 focus:outline-none disabled:cursor-not-allowed "
  inputClassName += datePicker.inputClassName

  return (
    <Datepicker
      value={datePicker.value}
      onChange={datePicker.onChange}
      placeholder={datePicker.placeholder}
      disabled={datePicker.disabled}
      inputClassName={inputClassName}
      containerClassName={datePicker.containerClassName}
    />
  )
}
