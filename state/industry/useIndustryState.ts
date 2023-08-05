import { useContext, useMemo } from "react"
import { IndustryContext } from "./IndustryContext"

export const useIndustryState = () => {
  const { state } = useContext(IndustryContext)

  return {
    industries: useMemo(() => state.data, [state.data]),
    loading: state.loading,
    error: state.error,
  }
}
