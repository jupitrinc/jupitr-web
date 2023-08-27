import React from "react"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import { Loader } from "lucide-react"
import SkillList from "./job-view/SkillList"
import Videos from "./job-view/Videos"
import TitleBar from "./job-view/TitleBar"
import Details from "./job-view/Details"
import CoverVideo from "./job-view/videos/CoverVideo"

const JobView = () => {
  const { talent_job, loading } = useTalentJobState()

  if (loading) {
    return <Loader />
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
  } else {
    return null
  }
}

export default JobView
