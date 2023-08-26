import type { Meta, StoryObj } from "@storybook/react"

import { ProgressBar } from "./ProgressBar"

const meta: Meta<typeof ProgressBar> = {
  title: "ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const value: Story = {
  args: {
    progress: 70,
  },
}
