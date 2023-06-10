import type { Meta, StoryObj } from "@storybook/react"
import { Tabs } from "./Tabs"

const meta: Meta<typeof Tabs> = {
  title: "Menu/Tabs",
  component: Tabs,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const tabs: Story = {
  args: {
    items: ["Beginner", "Pro", "Expert"],
  },
}

export const active: Story = {
  args: {
    items: ["Beginner", "Pro", "Expert"],
    active_tab: 1,
  },
}

export const size: Story = {
  args: {
    items: ["Beginner", "Pro", "Expert"],
    size: "base",
  },
}
