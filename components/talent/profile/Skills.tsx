import { Plus, X } from "lucide-react"
import { useState } from "react"
import { useTalentProfileAction } from "state/talent_profile/useTalentProfileAction"
import { useTalentProfileState } from "state/talent_profile/useTalentProfileState"
import { Button } from "ui-library/button/Button"
import { LightForm } from "ui-library/form/light-form/LightForm"
import { Tabs } from "ui-library/menu/tabs/Tabs"
import { Text } from "ui-library/text/Text"
import { SectionHeader } from "./Sections"
import { Card } from "ui-library/card/Card"
import { ISkill } from "state/company_job/companyJob.types"

export const Skills = () => {
  const { talent_profile } = useTalentProfileState()
  const skills = talent_profile.skills

  const [newSkill, setNewSkill] = useState<string>("")
  const { addSkill } = useTalentProfileAction()

  const handleAddSkill = (e) => {
    e.preventDefault()
    addSkill({ id: "444", name: newSkill, level: 1 })
    setNewSkill("")
  }

  return (
    <>
      <SectionHeader title="Skills" />

      <div className="space-y-10">
        <LightForm
          placeHolder="Search ..."
          onChange={(e) => setNewSkill(e.target.value)}
          value={newSkill}
          onSubmit={handleAddSkill}
          onClick={handleAddSkill}
          icon={<Plus />}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skills.map((skill) => (
            <SkillCard skill={skill} key={skill.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export interface SkillCardProps {
  skill: ISkill
}

export const SkillCard: React.FC<SkillCardProps> = (card) => {
  const [level, setLevel] = useState(card.skill.level)
  const { removeSkill } = useTalentProfileAction()
  return (
    <Card type="static">
      <div className="flex justify-between mb-3">
        <Text as="span" size="lg">
          {card.skill.name}
        </Text>

        <Button
          onClick={() => removeSkill(card.skill)}
          icon={<X className="h-4 w-4" />}
          size="base"
          color="standard"
          variant="text"
        />
      </div>

      <Tabs
        items={["Beginner", "Competent", "Expert"]}
        active_tab={level}
        onChange={setLevel}
      />
    </Card>
  )
}
