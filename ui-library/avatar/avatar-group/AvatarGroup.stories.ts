import type { Meta, StoryObj } from "@storybook/react"

import { AvatarGroup } from "./AvatarGroup"

const meta: Meta<typeof AvatarGroup> = {
  title: "Avatar/AvatarGroup",
  component: AvatarGroup,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AvatarGroup>
const data = [
  {
    image_url:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    size: 20,
  },
  {
    image_url:
      "https://plus.unsplash.com/premium_photo-1663100696872-43eea3bf307b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
    size: 20,
  },
  {
    name_initials: "Elon Musk",
    size: 20,
  },
  {
    size: 20,
  },
  {
    size: 20,
  },
]

export const Photo: Story = {
  args: {
    avatars: data,
    max_number: 3,
  },
}
