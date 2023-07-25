import React, { memo } from "react"
import { useCompanyJobsState } from "state/company_jobs/useCompanyJobsState"
import { ICompanyJob } from "state/company_job/companyJob.types"
import { Text } from "ui-library/text/Text"
import { Card } from "ui-library/content/card/Card"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"
import { Button } from "ui-library/button/Button"
import { useRouter } from "next/router"

export const List = () => {
  const {
    company_jobs_open,
    company_jobs_closed,
    company_jobs_draft,
    loading,
    error,
  } = useCompanyJobsState()

  return (
    <div className="flex flex-col gap-10">
      <NewJob />

      {company_jobs_draft.length && (
        <ListGroup title="Draft" jobs={company_jobs_draft} />
      )}

      {company_jobs_open.length && (
        <ListGroup title="Open" jobs={company_jobs_open} />
      )}

      {company_jobs_closed.length && (
        <ListGroup title="Closed" jobs={company_jobs_closed} />
      )}
    </div>
  )
}

const ListGroup = memo(
  ({ title, jobs }: { title: string; jobs: ICompanyJob[] }) => {
    const highlight = title === "Open"
    return (
      <div
        className={`flex flex-col gap-5 p-5 relative ${
          highlight && "bg-white rounded-lg"
        }`}
      >
        <Text as="h2" size="sm" align="left">
          {title}
        </Text>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 overflow-x-auto p-1">
          {jobs.map((job) => (
            <ListCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    )
  }
)

ListGroup.displayName = "ListGroup"

const ListCard = ({ job }: { job: ICompanyJob }) => {
  const router = useRouter()
  const { setJob } = useCompanyJobAction()

  const viewJob = (e) => {
    e.stopPropagation()
    setJob(job)
    router.push(`/c/jobs/${job.id}`)
  }

  return (
    <Card type="linked" onClick={viewJob}>
      <div className="flex flex-col gap-2 group">
        <Text as="span" size="xl">
          {job.title}
        </Text>

        <Text as="span" size="base">
          {job.location}
        </Text>
      </div>
    </Card>
  )
}

const NewJob = () => {
  return (
    <div className="flex justify-end">
      <Button label="New job" size="sm" color="special" />
    </div>
  )
}
