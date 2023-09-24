import { useContext, useMemo } from "react"
import { CompanyJobContext } from "./CompanyJobContext"

export const useCompanyJobState = () => {
  const { state } = useContext(CompanyJobContext)

  return {
    company_job: state.data,
    loading: state.loading,

    videos: useMemo(
      () => state.data.company_videos,
      [state.data.company_videos]
    ),
  }
}
