import React from "react"
import { Card } from "ui-library/content/card/Card"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Text } from "ui-library/text/Text"
import { ITalentJob } from "state/talent_job/talentJob.types"
import { useTalentJobAction } from "state/talent_job/useTalentJobAction"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import { urlHelper } from "helper/urlHelper"

const ListCard = ({ job }: { job: ITalentJob }) => {
  const { talent_job } = useTalentJobState()
  const { setJob } = useTalentJobAction()
  return (
    <Card onClick={() => setJob(job)} active={job.id === talent_job.id}>
      <div className="flex flex-row items-center gap-5">
        <Avatar
          image_url={urlHelper.imageUrl(job.company.logo)}
          size={10}
          alt={`${job.company.name} logo`}
        />
        <div className="flex flex-col gap-1">
          <Text as="h1" size="base">
            {job.title}
          </Text>
          <Text as="span" size="sm">
            {job.company.name}
          </Text>
        </div>
      </div>
    </Card>
  )
}

export default ListCard
