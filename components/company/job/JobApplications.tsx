import React, { useEffect } from "react"
import { Loading } from "ui-library/content/loading/Loading"
import { useRouter } from "next/router"
import { useCompanyJobApplicationAction } from "state/company_job_application/useCompanyJobApplicationAction"
import { useCompanyJobApplicationState } from "state/company_job_application/useCompanyJobApplicationState"
import ApplicationCard from "./job-applications/ApplicationCard"
import Header from "./job-applications/Header"
import { useUserState } from "../../../state/user/useUserState"

export const JobApplications = () => {
  const router = useRouter()
  const { jobId } = router.query
  const { user } = useUserState()
  const { company_job_applications, loading } = useCompanyJobApplicationState()
  const { getAllApplications, clearApplications } =
    useCompanyJobApplicationAction()

  useEffect(() => {
    if (jobId && !company_job_applications.id) {
      getAllApplications(String(jobId), user.company_id)
    }

    return () => {
      clearApplications()
    }
  }, [jobId])

  if (loading) return <Loading />

  return (
    <div className="grid grid-cols-1 gap-5">
      <Header />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {company_job_applications.applications?.map((application) => (
          <ApplicationCard
            key={application.id}
            application={application}
            jobSkills={company_job_applications.skills}
          />
        ))}
      </div>
    </div>
  )
}
