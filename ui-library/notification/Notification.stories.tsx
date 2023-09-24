import type { Meta, StoryObj } from "@storybook/react"
import { Notification } from "./Notification"

const meta: Meta<typeof Notification> = {
  title: "Toast",
  component: Notification,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Notification>

export const toast: Story = {
  args: {
    message: "Log in using the One Time Password (OTP) sent to your inbox.",
  },
}
