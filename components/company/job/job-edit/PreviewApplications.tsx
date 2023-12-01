import { useRouter } from "next/router"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { Button } from "ui-library/button/Button"
import { Text } from "ui-library/text/Text"

export const PreviewApplications = () => {
  const router = useRouter()
  const { company_job } = useCompanyJobState()

  const viewApplications = (e) => {
    e.stopPropagation()
    router.push(`/c/jobs/${company_job.id}/apps`)
  }

  return (
    <div className="flex flex-col items-center justify-between gap-5 rounded-lg bg-gray-200 p-5 md:flex-row">
      {company_job.applications && (
        <Text as="span" size="sm" align="right">
          {`${company_job.applications[0].count} ${
            company_job.applications[0].count === 1
              ? "application"
              : "applications"
          }`}
        </Text>
      )}
      <Button
        label="View"
        variant="outlined"
        size="xs"
        onClick={viewApplications}
      />
    </div>
  )
}

export default PreviewApplications
