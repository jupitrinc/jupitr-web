import { useRouter } from "next/router"
import React, { useCallback, useMemo } from "react"
import { useCompanyJobApplicationState } from "state/company_job_application/useCompanyJobApplicationState"
import { Button } from "ui-library/button/Button"
import { Text } from "ui-library/text/Text"

const Header = () => {
  const router = useRouter()
  const { jobId } = router.query
  const { company_job_applications } = useCompanyJobApplicationState()

  const viewJob = useCallback(() => {
    router.push(`/c/jobs/${jobId}`)
  }, [jobId])

  const title = useMemo(() => {
    return `${company_job_applications.applications?.length} ${
      company_job_applications.applications?.length === 1
        ? "application"
        : "applications"
    }`
  }, [company_job_applications])

  return (
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
        {title}
      </Text>
    </div>
  )
}

export default Header
