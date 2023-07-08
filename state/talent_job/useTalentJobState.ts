import { useContext } from "react"
import { TalentJobContext } from "./TalentJobContext"

export const useTalentJobState = () => {
  const { state } = useContext(TalentJobContext)

  return {
    talent_job: state.data,
    loading: state.loading,
    error: state.error,
  }
}
