import type { Meta, StoryObj } from "@storybook/react"

import { Loader } from "./Loader"
const meta: Meta<typeof Loader> = {
  title: "Loader",
  component: Loader,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Loader>

export const standard: Story = {
  args: {
    type: "standard",
    className: "w-10 h-10",
  },
}
export const dangerous: Story = {
  args: {
    type: "dangerous",
    className: "w-10 h-10",
  },
}
export const important: Story = {
  args: {
    type: "important",
    className: "w-10 h-10",
  },
}
