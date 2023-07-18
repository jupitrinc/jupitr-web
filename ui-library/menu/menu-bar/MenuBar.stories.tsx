import type { Meta, StoryObj } from "@storybook/react"

import { MenuBar } from "./MenuBar"
const meta: Meta<typeof MenuBar> = {
  title: "Menu/MenuBar",
  component: MenuBar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof MenuBar>

const options = [
  { name: "Preview", onClick: () => console.log("clicked") },
  { name: "Publish", onClick: () => console.log("clicked") },
  { name: "Collaborate", onClick: () => console.log("clicked") },
  { name: "Share", onClick: () => console.log("clicked") },
  { name: "Delete", onClick: () => console.log("clicked") },
]

export const menu: Story = {
  args: {
    options: options,
  },
}

export const more: Story = {
  args: {
    options: options,
    max_number: 3,
  },
}

export const outlined: Story = {
  args: {
    options: options,
    max_number: 3,
    variant: "outlined",
  },
}
