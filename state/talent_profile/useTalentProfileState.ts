import { useContext } from "react"
import { TalentProfileContext } from "./TalentProfileContext"

export const useTalentProfileState = () => {
  const { state } = useContext(TalentProfileContext)

  return {
    talent_profile: state.data,
    loading: state.loading,
    error: state.error,
  }
}
