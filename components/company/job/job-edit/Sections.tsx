import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { Card } from "ui-library/content/card/Card"
import { Skills } from "./Skills"
import { Videos } from "./Videos"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"
import { useUserState } from "state/user/useUserState"
import JobTitle from "./JobTitle"
import JobToolbar from "./JobToolbar"
import JobApplicationsPreview from "./JobApplicationsPreview"
import Salary from "./Salary"
import WorkModel from "./WorkModel"
import TalentApplication from "./TalentApplication"
import Location from "./Location"

export const Sections = () => {
  const { user } = useUserState()
  const { company_job } = useCompanyJobState()
  const { getJob } = useCompanyJobAction()

  const router = useRouter()
  const { jobId } = router.query

  useEffect(() => {
    if (jobId && user.id) {
      getJob(jobId.toString())
    }
  }, [jobId])

  return (
    <div className="grid grid-cols-1 gap-5">
      <JobApplicationsPreview />

      <div className="flex flex-col md:flex-row gap-5">
        <JobTitle />
        <JobToolbar />
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
          {/*<Videos /> */}
          <TalentApplication />
        </div>
      </div>
    </div>
  )
}
