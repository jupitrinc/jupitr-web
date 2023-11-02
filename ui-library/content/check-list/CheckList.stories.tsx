import type { Meta, StoryObj } from "@storybook/react"
import { CheckList } from "./CheckList"

const meta: Meta<typeof CheckList> = {
  title: "Content/CheckList",
  component: CheckList,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof CheckList>

export const Checks: Story = {
  args: {
    items: [
      { label: "Name", checked: true },
      { label: "Skills", checked: true },
      { label: "Socials", checked: true },
      { label: "Location", checked: false },
    ],
  },
}
