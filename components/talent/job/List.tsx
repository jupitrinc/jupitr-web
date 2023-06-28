import React, { useEffect } from "react"
import { Card } from "ui-library/card/Card"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Text } from "ui-library/text/Text"
import { useTalentJobsState } from "state/talent_jobs/useTalentJobsState"
import { ITalentJob } from "state/talent_job/talentJob.types"
import { useTalentJobAction } from "state/talent_job/useTalentJobAction"

export const List = () => {
  const { talent_jobs } = useTalentJobsState()
  const { setJob } = useTalentJobAction()

  useEffect(() => {
    if (talent_jobs.length) {
      //setJob(talent_jobs[0])
    }
  })

  return (
    <div className="flex flex-col gap-5 overflow-x-scroll p-5 bg-gray-100 rounded-lg">
      <Text as="p">{`${talent_jobs.length} jobs`}</Text>
      {talent_jobs.map((job: ITalentJob) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}

const JobCard = ({ job }: { job: ITalentJob }) => {
  const { setJob } = useTalentJobAction()
  return (
    <Card onClick={() => setJob(job)}>
      <div className="p-3 flex flex-row gap-5 items-center">
        <Avatar
          image_url={job.company.logo}
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
