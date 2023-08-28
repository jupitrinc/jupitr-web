import type { Meta, StoryObj } from "@storybook/react"
import Pulse from "./Pulse"

const meta: Meta<typeof Pulse> = {
  title: "Pulse",
  component: Pulse,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Pulse>

export const blue: Story = {
  args: {},
}
