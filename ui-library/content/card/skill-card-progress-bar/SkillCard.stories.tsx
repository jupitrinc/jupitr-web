import type { Meta, StoryObj } from "@storybook/react"
import SkillCard from "./SkillCard"

const meta: Meta<typeof SkillCard> = {
  title: "Content/SkillCard/ProgressBar",
  component: SkillCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SkillCard>

export const editable: Story = {
  args: {
    skill: { id: "id", name: "skill name", level: 2 },
  },
}
