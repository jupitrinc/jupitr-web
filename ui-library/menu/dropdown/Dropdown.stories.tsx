import type { Meta, StoryObj } from "@storybook/react"

import { Dropdown } from "./Dropdown"
import { sampleData } from "ui-library/_sample/sample.data"
const meta: Meta<typeof Dropdown> = {
  title: "Menu/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Dropdown>

const items = [
  { name: "Profile", onClick: () => console.log("clicked") },
  { name: "Account settings", onClick: () => console.log("clicked") },
  { name: "Sign out", onClick: () => console.log("clicked") },
]

export const label: Story = {
  args: {
    label: "Profile",
    items: items,
    type: "label",
  },
}

export const avatar: Story = {
  args: {
    label: "Members",
    items: items,
    type: "avatar",
    image_url: sampleData.image[3],
  },
}

export const more: Story = {
  args: {
    type: "more",
    items: items,
  },
}
