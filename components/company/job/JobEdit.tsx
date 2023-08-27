import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { Card } from "ui-library/content/card/Card"
import { Skills } from "./job-edit/Skills"
import { Videos } from "./job-edit/Videos"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"
import { useUserState } from "state/user/useUserState"
import Title from "./job-edit/Title"
import Toolbar from "./job-edit/Toolbar"
import PreviewApplications from "./job-edit/PreviewApplications"
import Salary from "./job-edit/Salary"
import WorkModel from "./job-edit/WorkModel"
import TalentApplication from "./job-edit/TalentApplication"
import Location from "./job-edit/Location"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"

export const JobEdit = () => {
  const { user } = useUserState()
  const { getJob, clearJob } = useCompanyJobAction()

  const router = useRouter()
  const { jobId } = router.query

  useEffect(() => {
    if (jobId && user.id) {
      getJob(jobId.toString())
    }

    return () => {
      clearJob()
    }
  }, [jobId])

  return (
    <div className="grid grid-cols-1 gap-5">
      <PreviewApplications />

      <div className="flex flex-col md:flex-row gap-5">
        <Title />
        <Toolbar />
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="basis-1/3 flex flex-col gap-5">
          <Card type="section">
            <Salary />
            <WorkModel />
            <Location />
          </Card>

          <Skills />
        </div>
        <div className="basis-2/3 flex flex-col gap-5">
          <Videos />
          <TalentApplication />
        </div>
      </div>
    </div>
  )
}
