import { Button } from "ui-library/button/Button"
import { Tabs } from "ui-library/menu/tabs/Tabs"
import { Text } from "ui-library/text/Text"
import { Card } from "ui-library/content/card/Card"
import { X } from "lucide-react"
import { useTalentProfileAction } from "state/talent_profile/useTalentProfileAction"
import { static_data_job } from "data/job"
import { SectionHeader } from "ui-library/content/section-header/SectionHeader"
import { ISkill } from "state/skill/skill.types"
import { useUserState } from "state/user/useUserState"
import { Multiselect } from "ui-library/form/multiselect/Multiselect"
import { static_data_skills } from "data/skills"

export const Skills = () => {
  const { user } = useUserState()
  const { addSkill, removeSkill, updateSkill } = useTalentProfileAction()

  return (
    <Card type="section">
      <div className="flex flex-col gap-5">
        <SectionHeader title="Skills" />
        <Multiselect
          placeholder="Search skills"
          options={static_data_skills}
          onChange={(skill) =>
            addSkill(user.id, { ...skill, level: 2 }, user.skills)
          }
        />
      </div>

      <div className="grid grid-cols-1 gap-5">
        {user.skills &&
          user.skills.map((skill) => (
            <SkillCard
              skill={skill}
              key={skill.id}
              removeSkill={() => removeSkill(user.id, skill, user.skills)}
              updateSkill={(level: number) =>
                updateSkill(user.id, { ...skill, level: level }, user.skills)
              }
            />
          ))}
      </div>
    </Card>
  )
}

export const SkillCard = ({
  skill,
  removeSkill,
  updateSkill,
}: {
  skill: ISkill
  removeSkill: () => Promise<void>
  updateSkill: (level: number) => Promise<void>
}) => {
  return (
    <Card type="static">
      <div className="flex justify-between mb-3">
        <Text as="span" size="lg">
          {skill.name}
        </Text>

        <Button
          onClick={removeSkill}
          icon={<X className="h-4 w-4" />}
          size="base"
          color="standard"
          variant="text"
        />
      </div>

      <Tabs
        items={static_data_job.skill_levels}
        active_tab={skill.level}
        onChange={updateSkill}
      />
    </Card>
  )
}
