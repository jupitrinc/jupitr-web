import React, { useEffect } from "react"
import { Text } from "ui-library/text/Text"
import { useTalentJobsState } from "state/talent_jobs/useTalentJobsState"
import { ITalentJob } from "state/talent_job/talentJob.types"
import { useTalentJobAction } from "state/talent_job/useTalentJobAction"
import { Divider } from "ui-library/content/divider/Divider"
import ListCard from "./job-list/ListCard"

const JobList = () => {
  const { talent_jobs } = useTalentJobsState()
  const { setJob } = useTalentJobAction()

  useEffect(() => {
    if (talent_jobs.length) {
      setJob(talent_jobs[0])
    }
  }, [])

  return (
    <div className="flex flex-col bg-white rounded-lg h-screen">
      <div className="grid grid-cols-3 gap-5 items-center p-5">
        <Divider />
        <Text as="p" align="center">{`${talent_jobs.length} ${
          talent_jobs.length === 1 ? "job" : "jobs"
        }`}</Text>
        <Divider />
      </div>
      <div className="overflow-y-scroll space-y-5 p-5">
        {talent_jobs &&
          talent_jobs.map((job: ITalentJob) => (
            <ListCard key={job.id} job={job} />
          ))}
      </div>
    </div>
  )
}

export default JobList
