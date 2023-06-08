import type { Meta, StoryObj } from "@storybook/react"

import { Dropdown } from "./Dropdown"
const meta: Meta<typeof Dropdown> = {
  title: "Menu/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Dropdown>

const options = [
  { name: "Profile", onClick: () => console.log("clicked") },
  { name: "Account settings", onClick: () => console.log("clicked") },
  { name: "Sign out", onClick: () => console.log("clicked") },
]

export const label: Story = {
  args: {
    label: "Profile",
    options: options,
    type: "label",
  },
}

export const avatar: Story = {
  args: {
    label: "Members",
    options: options,
    type: "avatar",
    image_url:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
  },
}

export const more: Story = {
  args: {
    type: "more",
    options: options,
  },
}
