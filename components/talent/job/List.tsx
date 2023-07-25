import React, { useEffect, useState } from "react"
import { Card } from "ui-library/content/card/Card"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Text } from "ui-library/text/Text"
import { useTalentJobsState } from "state/talent_jobs/useTalentJobsState"
import { ITalentJob } from "state/talent_job/talentJob.types"
import { useTalentJobAction } from "state/talent_job/useTalentJobAction"
import { Divider } from "ui-library/content/divider/Divider"
import { useTalentJobState } from "state/talent_job/useTalentJobState"

export const List = () => {
  const { talent_jobs } = useTalentJobsState()
  const { setJob } = useTalentJobAction()

  useEffect(() => {
    if (talent_jobs.length) {
      //setJob(talent_jobs[0])
    }
  })

  return (
    <div className="flex flex-col bg-white rounded-lg h-screen">
      <div className="grid grid-cols-3 gap-5 items-center p-5">
        <Divider />
        <Text as="p" align="center">{`${talent_jobs.length} ${
          talent_jobs.length > 1 ? "jobs" : "job"
        }`}</Text>
        <Divider />
      </div>
      <div className="overflow-y-scroll space-y-5 p-5">
        {talent_jobs.map((job: ITalentJob) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}

const JobCard = ({ job }: { job: ITalentJob }) => {
  const { talent_job } = useTalentJobState()
  const { setJob } = useTalentJobAction()
  return (
    <Card onClick={() => setJob(job)} active={job.id === talent_job.id}>
      <div className="flex flex-row gap-5 items-center">
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
