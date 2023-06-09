import type { Meta, StoryObj } from "@storybook/react"

import { Image } from "./Image"
import { sampleData } from "ui-library/_sample/sample.data"

const meta: Meta<typeof Image> = {
  title: "Image",
  component: Image,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Image>

export const image: Story = {
  args: {
    src: sampleData.image[1],
    alt: "image",
    className: "w-40 h-auto rounded-lg",
  },
}
