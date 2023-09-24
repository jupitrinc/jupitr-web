import { useContext, useMemo } from "react"
import { TalentJobContext } from "./TalentJobContext"

export const useTalentJobState = () => {
  const { state } = useContext(TalentJobContext)

  return {
    talent_job: useMemo(() => state.data, [state.data]),
    loading: state.loading,
    success: state.success,
  }
}
