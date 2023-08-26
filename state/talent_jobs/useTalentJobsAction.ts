import { useContext } from "react"
import { TalentJobsActionEnum } from "./talentJobs.types"
import { TalentJobsContext } from "./TalentJobsContext"

export function useTalentJobsAction() {
  const { dispatch } = useContext(TalentJobsContext)

  const getJobs = async (language: string) => {
    if (!language) return

    dispatch({
      type: TalentJobsActionEnum.GET_JOBS_BEGIN,
    })
  }

  return {
    getJobs,
  }
}
