import React, { useCallback, useEffect } from "react"
import { useRouter } from "next/router"
import { Button } from "ui-library/button/Button"
import { Text } from "ui-library/text/Text"
import { useCompanyJobApplicationAction } from "state/company_job_application/useCompanyJobApplicationAction"
import { useCompanyJobApplicationState } from "state/company_job_application/useCompanyJobApplicationState"
import ApplicationCard from "./job-applications/ApplicationCard"
import { Loader } from "ui-library/loader/Loader"

export const JobApplications = () => {
  const router = useRouter()
  const { jobId } = router.query
  const { company_job_applications, loading, error } =
    useCompanyJobApplicationState()
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

  const viewJob = useCallback(() => {
    router.push(`/c/jobs/${jobId}`)
  }, [jobId])

  if (loading) {
    return <Loader />
  } else if (!error && company_job_applications) {
    return (
      <div className="grid grid-cols-1 gap-5">
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center bg-gray-200 p-5 rounded-lg">
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <Text as="span" size="xl" align="left">
              {company_job_applications.title}
            </Text>
            <Button
              label="View job"
              variant="outlined"
              size="xs"
              onClick={viewJob}
            />
          </div>

          <Text as="span" size="sm" align="right">
            {`${company_job_applications.applications?.length} ${
              company_job_applications.applications?.length === 1
                ? "application"
                : "applications"
            } `}
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {company_job_applications.applications &&
            company_job_applications.applications.map((application) => (
              <ApplicationCard key={application.id} application={application} />
            ))}
        </div>
      </div>
    )
  } else {
    return null
  }
}
