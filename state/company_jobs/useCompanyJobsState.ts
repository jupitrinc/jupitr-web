import { useContext, useMemo } from "react"
import { CompanyJobsContext } from "./CompanyJobsContext"

export const useCompanyJobsState = () => {
  const { state } = useContext(CompanyJobsContext)

  return {
    company_jobs: state.data,
    loading: state.loading,
    error: state.error,

    company_jobs_open: useMemo(
      () => state.data.filter((job) => job.status === "open"),
      [state.data]
    ),

    company_jobs_paused: useMemo(
      () => state.data.filter((job) => job.status === "paused"),
      [state.data]
    ),

    company_jobs_closed: useMemo(
      () => state.data.filter((job) => job.status === "closed"),
      [state.data]
    ),

    company_jobs_draft: useMemo(
      () => state.data.filter((job) => job.status === "draft"),
      [state.data]
    ),

    company_jobs_archived: useMemo(
      () => state.data.filter((job) => job.status === "archived"),
      [state.data]
    ),
  }
}
