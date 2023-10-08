import React from "react"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import { useRouter } from "next/router"
import { useUserState } from "state/user/useUserState"
import { AccountTypeEnum } from "state/user/user.types"
import { NoMatchFound } from "ui-library/content/no-match-found/NoMatchFound"
import { Loading } from "ui-library/content/loading/Loading"
import SkillList from "./job-view/SkillList"
import Videos from "./job-view/Videos"
import TitleBar from "./job-view/TitleBar"
import Details from "./job-view/Details"
import CoverVideo from "./job-view/videos/CoverVideo"

const JobView = () => {
  const router = useRouter()
  const { jobId } = router.query
  const { user } = useUserState()
  const { talent_job, loading } = useTalentJobState()

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
  } else if (jobId) {
    return (
      <NoMatchFound
        message="Job no longer available"
        link={
          user.account_type === AccountTypeEnum.talent ? "/jobs" : "/c/jobs"
        }
        label={
          user.account_type === AccountTypeEnum.talent
            ? "Find similar jobs"
            : "Go back"
        }
      />
    )
  }
}

export default JobView
