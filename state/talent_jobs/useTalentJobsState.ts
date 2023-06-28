import { useContext } from "react"
import { TalentJobsContext } from "./TalentJobsContext"

export const useTalentJobsState = () => {
  const { state } = useContext(TalentJobsContext)

  return {
    talent_jobs: state.data,
    loading: state.loading,
    error: state.error,
  }
}
