import type { Meta, StoryObj } from "@storybook/react"
import { Uploader } from "./Uploader"

const meta: Meta<typeof Uploader> = {
  title: "Uploader",
  component: Uploader,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Uploader>

export const UploadImage: Story = {
  args: {
    accept: "image/jpg, image/jpeg, image/png",
  },
}
