import React, { useMemo } from "react"
import { Text } from "ui-library/text/Text"
import { ProgressBar } from "ui-library/progress-bar/ProgressBar"
import { Card } from "ui-library/content/card/Card"
import { system_data } from "data/system"
import { ProgressBarProps } from "ui-library/progress-bar/ProgressBar.types"

export interface props {
  skill: { id: string; name: string; level: number; threshold?: number }
  threshold?: ProgressBarProps["threshold"]
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

  const threshold = useMemo(() => {
    return typeof skill.threshold === "number"
      ? skillLevel(skill.threshold)
      : undefined
  }, [skill])

  return (
    <Card type="static">
      <div className="mb-3 flex justify-between">
        <Text as="span" size="lg">
          {skill.name}
        </Text>
      </div>

      <ProgressBar progress={skillLevel(skill.level)} threshold={threshold} />

      <div className="mt-2 flex justify-between">
        <Text as="span" size="sm">
          {system_data.skill_levels[0]}
        </Text>
        <Text as="span" size="sm">
          {system_data.skill_levels[2]}
        </Text>
      </div>
    </Card>
  )
}

export default SkillCard
