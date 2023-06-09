import type { Meta, StoryObj } from "@storybook/react"

import { Avatar } from "./Avatar"
import { sampleData } from "ui-library/_sample/sample.data"

const meta: Meta<typeof Avatar> = {
  title: "Avatar/Avatar",
  component: Avatar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Photo: Story = {
  args: {
    image_url: sampleData.image[3],
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
