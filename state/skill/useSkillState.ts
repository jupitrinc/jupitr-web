import { useContext } from "react"
import { SkillContext } from "./SkillContext"

export const useSkillState = () => {
  const { state } = useContext(SkillContext)

  return {
    skills: state.data,
    loading: state.loading,
    error: state.error,
  }
}
