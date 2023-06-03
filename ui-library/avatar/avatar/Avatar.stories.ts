import type { Meta, StoryObj } from "@storybook/react"

import { Avatar } from "./Avatar"

const meta: Meta<typeof Avatar> = {
  title: "Avatar/Avatar",
  component: Avatar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Photo: Story = {
  args: {
    image_url:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    size: 20,
  },
}

export const NameInitials: Story = {
  args: {
    name_initials: "Elon Musk",
    size: 20,
  },
}

export const Placeholder: Story = {
  args: {
    size: 20,
  },
}
