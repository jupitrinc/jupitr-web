import type { Meta, StoryObj } from "@storybook/react"

import SkillCard from "./SkillCard"
import { system_data } from "data/system"

const meta: Meta<typeof SkillCard> = {
  title: "Content/SkillCard/Tabs",
  component: SkillCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SkillCard>

export const editable: Story = {
  args: {
    skill: { id: "id", name: "skill name", level: 2 },
    levels: system_data.skill_levels,
  },
}
