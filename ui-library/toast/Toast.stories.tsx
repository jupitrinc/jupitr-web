import type { Meta, StoryObj } from "@storybook/react"
import { Toast } from "./Toast"

const meta: Meta<typeof Toast> = {
  title: "Toast",
  component: Toast,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Toast>

export const toast: Story = {
  args: {
    label: "Log in using the One Time Password (OTP) sent to your inbox.",
    show: true,
  },
}
