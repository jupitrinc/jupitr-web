export interface DatePickerProps {
  value: DatePickerValueType
  onChange: (value: DatePickerValueType) => void
  placeholder?: string
  disabled?: boolean
}

export type DatePickerValueType = {
  startDate: string | Date | null
  endDate: string | Date | null
} | null
