import type { Meta, StoryObj } from "@storybook/react"

import { SectionHeader } from "./SectionHeader"
const meta: Meta<typeof SectionHeader> = {
  title: "Content/SectionHeader",
  component: SectionHeader,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SectionHeader>

export const section_header: Story = {
  args: {
    title: "Skills",
  },
}
