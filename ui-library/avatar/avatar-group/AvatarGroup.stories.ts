import type { Meta, StoryObj } from "@storybook/react"

import { AvatarGroup } from "./AvatarGroup"
import { sampleData } from "ui-library/_sample/sample.data"

const meta: Meta<typeof AvatarGroup> = {
  title: "Avatar/AvatarGroup",
  component: AvatarGroup,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AvatarGroup>
const data = [
  {
    image_url: sampleData.image[1],
    size: 20,
  },
  {
    image_url: sampleData.image[2],
    size: 20,
  },
  {
    image_url: sampleData.image[3],
    size: 20,
  },
  {
    name_initials: "Elon Musk",
    size: 20,
  },

  {
    size: 20,
  },
]

export const group: Story = {
  args: {
    avatars: data,
    max_number: 5,
  },
}
