import React from "react"
import { Text } from "ui-library/text/Text"
import { ProgressBar } from "ui-library/progress-bar/ProgressBar"
import { Card } from "ui-library/content/card/Card"
import { static_data_job } from "data/job"
import { ISkill } from "state/talent_profile/talentProfile.types"

const SkillCard = ({ skill }: { skill: ISkill }) => {
  const skillLevel = (level: number) => {
    switch (level) {
      case 1:
        return 10

      case 2:
        return 50

      case 3:
        return 90

      default:
        return 10
    }
  }

  return (
    <Card type="static">
      <div className="flex justify-between mb-3">
        <Text as="span" size="lg">
          {skill.name}
        </Text>
      </div>

      <ProgressBar progress={skillLevel(skill.level)} />
      <div className="flex justify-between mt-2">
        <Text as="span" size="sm">
          {static_data_job.skill_levels[skill.level]}
        </Text>
        <Text as="span" size="sm">
          {static_data_job.skill_levels[skill.level]}
        </Text>
      </div>
    </Card>
  )
}

export default SkillCard
