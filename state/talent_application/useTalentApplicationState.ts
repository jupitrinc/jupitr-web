import { useContext } from "react"
import { TalentApplicationContext } from "./TalentApplicationContext"

export const useTalentApplicationState = () => {
  const { state } = useContext(TalentApplicationContext)

  return {
    loading: state.loading,
    success: state.success,
  }
}
