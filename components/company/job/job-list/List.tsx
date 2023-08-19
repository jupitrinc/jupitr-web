import React, { memo, useEffect } from "react"
import { useRouter } from "next/router"
import { useCompanyJobsState } from "state/company_jobs/useCompanyJobsState"
import { ICompanyJob } from "state/company_job/companyJob.types"
import { Text } from "ui-library/text/Text"
import { Card } from "ui-library/content/card/Card"
import { useCompanyJobsAction } from "state/company_jobs/useCompanyJobsAction"
import { useUserState } from "state/user/useUserState"
import NewJob from "./NewJob"

const List = () => {
  const { getJobs, clearJobs } = useCompanyJobsAction()
  const {
    company_jobs_open,
    company_jobs_closed,
    company_jobs_draft,
    company_jobs,
    loading,
    error,
  } = useCompanyJobsState()
  const { user } = useUserState()

  useEffect(() => {
    if (company_jobs.length < 1 && user.company_id) {
      getJobs(user.company_id)
    }

    return () => clearJobs()
  }, [])

  return (
    <div className="flex flex-col gap-10">
      <NewJob />

      {company_jobs_draft.length > 0 && (
        <ListGroup title="Draft" jobs={company_jobs_draft} />
      )}

      {company_jobs_open.length > 0 && (
        <ListGroup title="Open" jobs={company_jobs_open} />
      )}

      {company_jobs_closed.length > 0 && (
        <ListGroup title="Closed" jobs={company_jobs_closed} />
      )}
    </div>
  )
}

export default List

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

  const viewJob = (e) => {
    e.stopPropagation()
    router.push(`/c/jobs/${job.id}`)
  }

  return (
    <Card type="linked" onClick={viewJob}>
      <div className="flex flex-col gap-2 group">
        <Text as="span" size="xl">
          {job.title}
        </Text>

        <Text as="span" size="base">
          {job.location?.name}
        </Text>
      </div>
    </Card>
  )
}
