import type { Meta, StoryObj } from "@storybook/react"
import NoMatchFound from "./NoMatchFound"

const meta: Meta<typeof NoMatchFound> = {
  title: "Content/NoMatchFound",
  component: NoMatchFound,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof NoMatchFound>

export const component: Story = {
  args: {
    message: "Job no longer available",
    label: "Find similar jobs",
    link: "/jobs",
  },
}
