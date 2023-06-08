import type { Meta, StoryObj } from "@storybook/react"

import { Ranger } from "./Ranger"

const meta: Meta<typeof Ranger> = {
  title: "Ranger",
  component: Ranger,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Ranger>

export const value: Story = {
  args: {
    value: 4,
    min: 1,
    max: 5,
  },
}
