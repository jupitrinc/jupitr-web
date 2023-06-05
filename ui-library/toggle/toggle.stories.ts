import type { Meta, StoryObj } from "@storybook/react"

import { Toggle } from "./Toggle"

const meta: Meta<typeof Toggle> = {
  title: "Toggle",
  component: Toggle,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Toggle>

export const small: Story = {
  args: {
    size: "small",
  },
}
export const medium: Story = {
  args: {
    size: "medium",
  },
}
export const large: Story = {
  args: {
    size: "large",
  },
}
export const label: Story = {
  args: {
    size: "large",
    label: "Label",
  },
}

export const disabled: Story = {
  args: {
    size: "large",
    disabled: true,
  },
}
