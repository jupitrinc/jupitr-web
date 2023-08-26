import { useContext, useMemo } from "react"
import { TalentJobsContext } from "./TalentJobsContext"

export const useTalentJobsState = () => {
  const { state } = useContext(TalentJobsContext)

  return {
    talent_jobs: useMemo(() => state.data, [state.data]),
    loading: state.loading,
    error: state.error,
    success: state.success,
  }
}
