import type { Meta, StoryObj } from "@storybook/react"
import { CopyClipboard } from "./CopyClipboard"

const meta: Meta<typeof CopyClipboard> = {
  title: "CopyClipboard",
  component: CopyClipboard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof CopyClipboard>

export const Copy: Story = {
  args: {
    value: "some text",
  },
}
