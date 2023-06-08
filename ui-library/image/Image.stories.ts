import type { Meta, StoryObj } from "@storybook/react"

import { Image } from "./Image"

const meta: Meta<typeof Image> = {
  title: "Image",
  component: Image,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Image>

export const image: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    alt: "image",
    className: "w-40 h-auto rounded-lg",
  },
}
