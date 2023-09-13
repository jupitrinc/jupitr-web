import React, { useEffect } from "react"
import { useCompanyJobsState } from "state/company_jobs/useCompanyJobsState"
import { useCompanyJobsAction } from "state/company_jobs/useCompanyJobsAction"
import { useUserState } from "state/user/useUserState"
import NewJob from "./job-list/NewJob"
import Group from "./job-list/Group"

const JobList = () => {
  const { getJobs, clearJobs } = useCompanyJobsAction()
  const {
    company_jobs_open,
    company_jobs_paused,
    company_jobs_closed,
    company_jobs_draft,
    company_jobs,
    loading,
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
        <Group title="Draft" jobs={company_jobs_draft} />
      )}

      {company_jobs_paused.length > 0 && (
        <Group title="Paused" jobs={company_jobs_paused} />
      )}

      {company_jobs_open.length > 0 && (
        <Group title="Open" jobs={company_jobs_open} />
      )}

      {company_jobs_closed.length > 0 && (
        <Group title="Closed" jobs={company_jobs_closed} />
      )}
    </div>
  )
}

export default JobList
