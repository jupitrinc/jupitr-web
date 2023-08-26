import React from "react"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import SkillList from "./job-view/SkillList"
import Videos from "./job-view/Videos"
import TitleBar from "./job-view/TitleBar"
import Details from "./job-view/Details"

const JobView = () => {
  const { talent_job } = useTalentJobState()

  if (talent_job.id) {
    return (
      <div className="flex flex-col gap-10 flex-wrap">
        <Videos />
        <TitleBar />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Details />
          <SkillList />
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default JobView
