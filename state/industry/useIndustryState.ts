import { useContext } from "react"
import { IndustryContext } from "./IndustryContext"

export const useIndustryState = () => {
  const { state } = useContext(IndustryContext)

  return {
    industries: state.data,
    loading: state.loading,
    error: state.error,
  }
}
