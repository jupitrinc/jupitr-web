import { Plus, X } from "lucide-react"
import { useState } from "react"
import { useTalentProfileAction } from "state/talent_profile/useTalentProfileAction"
import { useTalentProfileState } from "state/talent_profile/useTalentProfileState"
import { Button } from "ui-library/button/Button"
import { LightForm } from "ui-library/form/light-form/LightForm"
import { Tabs } from "ui-library/menu/tabs/Tabs"
import { Text } from "ui-library/text/Text"
import { SectionHeader } from "./Sections"

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

const SkillCard = ({ skill }) => {
  const [level, setLevel] = useState(skill.level)
  const { removeSkill } = useTalentProfileAction()
  return (
    <div className="flex flex-col space-y-2 text-center p-3 ring-1 ring-gray-900/10 rounded-xl">
      <div className="flex justify-between">
        <Text as="span" size="base" color="important">
          {skill.name}
        </Text>
        <Button
          onClick={() => removeSkill(skill)}
          icon={<X className="h-4 w-4" />}
          size="xs"
          color="important"
          variant="text"
        />
      </div>

      <Tabs
        items={["Beginner", "Competent", "Expert"]}
        active_tab={level}
        onChange={setLevel}
        size="sm"
      />
    </div>
  )
}
