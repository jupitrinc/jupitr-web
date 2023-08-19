import type { Meta, StoryObj } from "@storybook/react"

import { SkillCard } from "./SkillCard"
import { static_data_job } from "data/job"

const meta: Meta<typeof SkillCard> = {
  title: "Content/SkillCard",
  component: SkillCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SkillCard>

export const editable: Story = {
  args: {
    skill: { id: "id", name: "skill name", level: 2 },
    levels: static_data_job.skill_levels,
  },
}
