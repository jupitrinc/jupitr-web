import type { Meta, StoryObj } from "@storybook/react"

import { Toggle } from "./Toggle"

const meta: Meta<typeof Toggle> = {
  title: "Form/Toggle",
  component: Toggle,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Toggle>

export const small: Story = {
  args: {
    size: "sm",
  },
}
export const base: Story = {
  args: {
    size: "base",
  },
}
export const large: Story = {
  args: {
    size: "lg",
  },
}
export const label: Story = {
  args: {
    size: "lg",
    label: "Label",
  },
}

export const disabled: Story = {
  args: {
    size: "lg",
    disabled: true,
  },
}
