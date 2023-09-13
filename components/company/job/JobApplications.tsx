import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { useCompanyJobApplicationAction } from "state/company_job_application/useCompanyJobApplicationAction"
import { useCompanyJobApplicationState } from "state/company_job_application/useCompanyJobApplicationState"
import ApplicationCard from "./job-applications/ApplicationCard"
import { Loader } from "ui-library/loader/Loader"
import Header from "./job-applications/Header"

export const JobApplications = () => {
  const router = useRouter()
  const { jobId } = router.query
  const { company_job_applications, loading } = useCompanyJobApplicationState()
  const { getAllApplications, clearApplications } =
    useCompanyJobApplicationAction()

  useEffect(() => {
    if (jobId && !company_job_applications.id) {
      getAllApplications(String(jobId))
    }

    return () => {
      clearApplications()
    }
  }, [jobId])

  if (loading) return <Loader />

  return (
    <div className="grid grid-cols-1 gap-5">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {company_job_applications.applications &&
          company_job_applications.applications.map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
      </div>
    </div>
  )
}
