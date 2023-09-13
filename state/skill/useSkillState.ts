import { useContext, useMemo } from "react"
import { SkillContext } from "./SkillContext"

export const useSkillState = () => {
  const { state } = useContext(SkillContext)

  return {
    skills: useMemo(() => state.data, [state.data]),
    loading: state.loading,
  }
}
