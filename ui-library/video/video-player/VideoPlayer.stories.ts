import type { Meta, StoryObj } from "@storybook/react"
import { VideoPlayer } from "./VideoPlayer"
import { sampleData } from "ui-library/_sample/sample.data"

const meta: Meta<typeof VideoPlayer> = {
  title: "Video/VideoPlayer",
  component: VideoPlayer,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof VideoPlayer>

export const player: Story = {
  args: {
    src: sampleData.video[1],
    controls: true,
  },
}

export const autoplay: Story = {
  args: {
    src: sampleData.video[1],
    autoPlay: true,
  },
}
