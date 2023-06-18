import { Plus, X } from "lucide-react"
import { memo, useState } from "react"
import { TalentProfileType } from "state/talent_profile/talentProfile.types"
import { talentProfileAction } from "state/talent_profile/talentProfileAction"
import { Button } from "ui-library/button/Button"
import { Divider } from "ui-library/divider/Divider"
import { LightForm } from "ui-library/form/light-form/LightForm"
import { Tabs } from "ui-library/menu/tabs/Tabs"
import { Text } from "ui-library/text/Text"

interface props {
  skills: TalentProfileType["skills"]
}

export const Skills: React.FC<props> = memo(({ skills }) => {
  const [newSkill, setNewSkill] = useState<string>("")
  const { addSkill } = talentProfileAction()

  const handleAddSkill = (e) => {
    e.preventDefault()
    addSkill({ id: "444", name: newSkill, level: 1 })
    setNewSkill("")
  }

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-3 gap-4 items-center text-center">
        <Divider />
        <Text as="p" size="xl">
          Skills
        </Text>
        <Divider />
      </div>

      <div className="grid grid-rows-1 gap-4">
        <LightForm
          placeHolder="Add a skill ..."
          onChange={(e) => setNewSkill(e.target.value)}
          value={newSkill}
          onSubmit={handleAddSkill}
          icon={<Plus />}
        />

        {skills.map((skill) => (
          <SkillCard skill={skill} key={skill.id} />
        ))}
      </div>
    </div>
  )
})

Skills.displayName = "Skill"

const SkillCard = ({ skill }) => {
  const [level, setLevel] = useState(skill.level)
  const { removeSkill } = talentProfileAction()
  return (
    <div className="flex flex-col space-y-5 text-center bg-gray-100 p-5 rounded-lg shadow-lg">
      <div className="flex justify-between">
        <Text as="span" size="lg">
          {skill.name}
        </Text>
        <Button
          onClick={() => removeSkill(skill)}
          icon={<X className="h-4 w-4" />}
          size="xs"
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
