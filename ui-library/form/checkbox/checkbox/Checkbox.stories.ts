import type { Meta, StoryObj } from "@storybook/react"

import { Checkbox } from "./Checkbox"

const meta: Meta<typeof Checkbox> = {
  title: "Form/Checkbox/checkbox",
  component: Checkbox,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const checkbox: Story = {
  args: {
    label: "option 1",
  },
}
