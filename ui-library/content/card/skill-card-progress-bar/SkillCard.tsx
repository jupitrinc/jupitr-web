import React from "react"
import { Text } from "ui-library/text/Text"
import { ProgressBar } from "ui-library/progress-bar/ProgressBar"
import { Card } from "ui-library/content/card/Card"
import { static_data_job } from "data/job"

export interface props {
  skill: { id: string; name: string; level: number }
}

const SkillCard: React.FC<props> = ({ skill }) => {
  const skillLevel = (level: number) => {
    switch (level) {
      case 0:
        return 10

      case 1:
        return 50

      case 2:
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
          {static_data_job.skill_levels[0]}
        </Text>
        <Text as="span" size="sm">
          {static_data_job.skill_levels[2]}
        </Text>
      </div>
    </Card>
  )
}

export default SkillCard
