import type { Meta, StoryObj } from "@storybook/react"

import { Select } from "./Select"

const meta: Meta<typeof Select> = {
  title: "Form/Select",
  component: Select,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Select>

export const options: Story = {
  args: {
    options: ["1st option", "2nd option", "3rd option"],
  },
}

export const label: Story = {
  args: {
    options: ["1st option", "2nd option", "3rd option"],
    label: "Select an option",
  },
}

export const disabled: Story = {
  args: {
    options: ["1st option", "2nd option", "3rd option"],
    label: "Select an option",
    disabled: true,
  },
}
