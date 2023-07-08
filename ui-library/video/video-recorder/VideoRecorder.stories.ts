import type { Meta, StoryObj } from "@storybook/react"
import { VideoRecorder } from "./VideoRecorder"

const meta: Meta<typeof VideoRecorder> = {
  title: "Video/VideoRecorder",
  component: VideoRecorder,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof VideoRecorder>

export const recorder: Story = {
  args: {
    duration: 15,
  },
}
