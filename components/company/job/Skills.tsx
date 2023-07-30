import { useState } from "react"
import { useTalentProfileAction } from "state/talent_profile/useTalentProfileAction"
import { Button } from "ui-library/button/Button"
import { LightForm } from "ui-library/form/light-form/LightForm"
import { Tabs } from "ui-library/menu/tabs/Tabs"
import { Text } from "ui-library/text/Text"
import { Card } from "ui-library/content/card/Card"
import { Plus, X } from "lucide-react"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { static_data_job } from "data/job"
import { SectionHeader } from "ui-library/content/section-header/SectionHeader"
import { ISkill } from "state/skill/skill.types"

export const Skills = () => {
  const { company_job } = useCompanyJobState()
  const skills = company_job.skills

  const [newSkill, setNewSkill] = useState<string>("")
  //const { addSkill } = useTalentProfileAction()

  const handleAddSkill = (e) => {
    e.preventDefault()
    //addSkill({ id: "444", name: newSkill, level: 1 })
    setNewSkill("")
  }

  return (
    <Card type="section">
      <div className="flex flex-col gap-5">
        <SectionHeader title="Skills" />
        <LightForm
          placeHolder="Search ..."
          onChange={(e) => setNewSkill(e.target.value)}
          value={newSkill}
          // onSubmit={handleAddSkill}
          onClick={handleAddSkill}
          icon={<Plus className="h-5 w-5" />}
        />
      </div>

      <div className="grid grid-cols-1 gap-5">
        {skills.map((skill) => (
          <SkillCard skill={skill} key={skill.id} />
        ))}
      </div>
    </Card>
  )
}

export const SkillCard = ({ skill }: { skill: ISkill }) => {
  const [level, setLevel] = useState(skill.level)
  const { removeSkill } = useTalentProfileAction()
  return (
    <Card type="static">
      <div className="flex justify-between mb-3">
        <Text as="span" size="lg">
          {skill.name}
        </Text>

        <Button
          onClick={() => removeSkill(skill)}
          icon={<X className="h-4 w-4" />}
          size="base"
          color="standard"
          variant="text"
        />
      </div>

      <Tabs
        items={static_data_job.skill_levels}
        active_tab={level}
        onChange={setLevel}
      />
    </Card>
  )
}
