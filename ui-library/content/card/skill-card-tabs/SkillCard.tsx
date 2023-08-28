import { X } from "lucide-react"
import { Card } from "../Card"
import { Text } from "ui-library/text/Text"
import { Button } from "ui-library/button/Button"
import { Tabs } from "ui-library/menu/tabs/Tabs"

export interface props {
  skill: { id: string; name: string; level: number }
  removeSkill?: () => Promise<void>
  updateSkill: (level: number) => Promise<void>
  levels: string[]
  hideRemove?: boolean
}

const SkillCard: React.FC<props> = (props) => {
  return (
    <Card type="static">
      <div className="flex justify-between mb-3">
        <Text as="span" size="lg">
          {props.skill.name}
        </Text>

        {!props.hideRemove && (
          <Button
            onClick={props.removeSkill}
            icon={<X className="h-4 w-4" />}
            size="base"
            color="standard"
            variant="text"
          />
        )}
      </div>

      <Tabs
        items={props.levels}
        active_tab={props.skill.level}
        onChange={(level) => props.updateSkill(level)}
      />
    </Card>
  )
}

export default SkillCard
