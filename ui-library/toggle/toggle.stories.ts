import type { Meta, StoryObj } from "@storybook/react"

import { Toggle } from "./Toggle"

const meta: Meta<typeof Toggle> = {
  title: "Toggle",
  component: Toggle,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Toggle>

export const size: Story = {
  args: {
    size: "default",
  },
}
