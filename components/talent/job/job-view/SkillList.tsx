import { Text } from "ui-library/text/Text"
import { Divider } from "ui-library/content/divider/Divider"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import SkillCard from "./SkillCard"

const SkillList = () => {
  const { talent_job } = useTalentJobState()

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-3 gap-5 items-center">
        <Divider />
        <Text as="h2" size="lg" align="center">
          Skills
        </Text>
        <Divider />
      </div>

      <div className="flex flex-row flex-wrap gap-5">
        {talent_job.skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default SkillList
