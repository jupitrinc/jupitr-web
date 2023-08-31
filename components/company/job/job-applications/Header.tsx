import React from "react"
import { ICompanyJobApplication } from "state/company_job_application/companyJobApplication.types"
import { useCompanyJobApplicationState } from "state/company_job_application/useCompanyJobApplicationState"
import { Button } from "ui-library/button/Button"
import { Text } from "ui-library/text/Text"

const Header = ({ viewJob }: { viewJob: () => void }) => {
  const { company_job_applications, error } = useCompanyJobApplicationState()

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
        {`${
          error
            ? "0 applications"
            : company_job_applications.applications?.length === 1
            ? "application"
            : `${company_job_applications.applications?.length} applications`
        }`}
      </Text>
    </div>
  )
}

export default Header
