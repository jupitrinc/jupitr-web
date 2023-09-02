import React, { useEffect } from "react"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import SkillList from "./job-view/SkillList"
import Videos from "./job-view/Videos"
import TitleBar from "./job-view/TitleBar"
import Details from "./job-view/Details"
import CoverVideo from "./job-view/videos/CoverVideo"
import Loading from "layouts/components/Loading"
import { useRouter } from "next/router"
import { useTalentJobAction } from "state/talent_job/useTalentJobAction"
import { error } from "console"
import NoMatchFound from "ui-library/content/no-match-found/NoMatchFound"

const JobView = () => {
  const router = useRouter()
  const { jobId } = router.query

  const { talent_job, loading, error } = useTalentJobState()
  const { getJob, clearJob } = useTalentJobAction()

  useEffect(() => {
    if (jobId && !talent_job.id) {
      getJob(String(jobId))
    }

    return () => {
      clearJob()
    }
  }, [jobId])

  console.log(talent_job)

  if (loading) {
    return <Loading />
  } else if (talent_job.id) {
    return (
      <div className="flex flex-col gap-10 flex-wrap">
        <CoverVideo />
        <TitleBar />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Details />
          <SkillList />
        </div>
        <Videos />
      </div>
    )
  } else if (error) {
    return <NoMatchFound message="Job not found" link="/" label="Sign in" />
  }
}

export default JobView
