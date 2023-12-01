import React, { useEffect } from "react"
import { Text } from "ui-library/text/Text"
import { useTalentJobsState } from "state/talent_jobs/useTalentJobsState"
import { ITalentJob } from "state/talent_job/talentJob.types"
import { useTalentJobAction } from "state/talent_job/useTalentJobAction"
import { Divider } from "ui-library/content/divider/Divider"
import { Loading } from "ui-library/content/loading/Loading"
import { NoMatchFound } from "ui-library/content/no-match-found/NoMatchFound"
import { useTalentJobsAction } from "state/talent_jobs/useTalentJobsAction"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import { useUserState } from "../../../state/user/useUserState"
import ListCard from "./job-list/ListCard"
import ListSwiper from "./job-list/ListSwiper"

const JobList = () => {
  const { user } = useUserState()
  const { talent_jobs, loading } = useTalentJobsState()
  const { getJobs, clearJobs } = useTalentJobsAction()
  const { setJob } = useTalentJobAction()
  const { talent_job } = useTalentJobState()

  useEffect(() => {
    if (talent_jobs.length < 1 && user.id) {
      getJobs()
    }

    return () => {
      clearJobs()
    }
  }, [])

  useEffect(() => {
    if (talent_jobs.length && !talent_job.id && user.id) {
      setJob(talent_jobs[0])
    }
  }, [talent_jobs, user])

  if (loading) return <Loading />
  else if (talent_jobs.length)
    return (
      <>
        <ListSwiper jobs={talent_jobs} />

        <div className="hidden h-screen flex-col rounded-lg bg-white md:flex">
          <div className="grid grid-cols-3 items-center gap-5 p-5">
            <Divider />
            <Text as="p" align="center">{`${talent_jobs.length} ${
              talent_jobs.length === 1 ? "job" : "jobs"
            }`}</Text>
            <Divider />
          </div>
          <div className="space-y-5 overflow-y-scroll p-5">
            {talent_jobs.map((job: ITalentJob) => (
              <ListCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </>
    )
  else
    return (
      <div className="fixed left-1/2 top-1/3 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-10">
        <NoMatchFound
          message="0 jobs found matching your profile"
          label="Update profile"
          link="/profile"
        />
      </div>
    )
}

export default JobList
