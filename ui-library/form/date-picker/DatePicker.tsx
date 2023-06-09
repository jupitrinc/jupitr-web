import Datepicker from "./extras/components/Datepicker"
import { DatePickerProps } from "./DatePicker.types"
import { datePickerStyles } from "./DatePicker.styles"

export const DatePicker: React.FC<DatePickerProps> = (datePicker) => {
  const styles = datePickerStyles
  return (
    <Datepicker
      value={datePicker.value}
      onChange={datePicker.onChange}
      placeholder={datePicker.placeholder}
      disabled={datePicker.disabled}
      inputClassName={datePickerStyles.input}
      containerClassName=""
    />
  )
}
