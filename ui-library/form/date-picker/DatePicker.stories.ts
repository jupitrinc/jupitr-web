import type { Meta, StoryObj } from "@storybook/react"

import { DatePicker } from "./DatePicker"

const meta: Meta<typeof DatePicker> = {
  title: "Form/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const datePicker: Story = {
  args: {
    value: { startDate: Date.now(), endDate: Date.now() },
  },
}
