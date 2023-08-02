import type { Meta, StoryObj } from "@storybook/react"
import { Uploader } from "./Uploader"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { sampleData } from "ui-library/_sample/sample.data"

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
    children: <Avatar image_url={sampleData.image[2]} size={40} />,
  },
}
