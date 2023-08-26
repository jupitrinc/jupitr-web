import { useContext } from "react"
import { TalentJobsActionEnum } from "./talentJobs.types"
import { TalentJobsContext } from "./TalentJobsContext"
import useTalentJobService from "services/talent/useTalentJobService"
import { ITalentJob } from "state/talent_job/talentJob.types"

export function useTalentJobsAction() {
  const { dispatch } = useContext(TalentJobsContext)
  const { getJobs: getJobsService } = useTalentJobService()

  const getJobs = async () => {
    dispatch({
      type: TalentJobsActionEnum.GET_JOBS_BEGIN,
    })

    const { data, error } = await getJobsService()

    if (error) {
      dispatch({
        type: TalentJobsActionEnum.GET_JOBS_FAILURE,
        payload: error.message,
      })
    } else {
      dispatch({
        type: TalentJobsActionEnum.GET_JOBS_SUCCESS,
        payload: data as ITalentJob[],
      })
    }
  }

  const clearJobs = async () => {
    dispatch({
      type: TalentJobsActionEnum.CLEAR_JOBS,
    })
  }

  return {
    getJobs,
    clearJobs,
  }
}
