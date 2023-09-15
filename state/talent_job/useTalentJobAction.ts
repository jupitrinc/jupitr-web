import { useContext } from "react"
import { ITalentJob, TalentJobActionEnum } from "./talentJob.types"
import { TalentJobContext } from "./TalentJobContext"
import talentJobService from "services/talent/talentJobService"

export function useTalentJobAction() {
  const { dispatch } = useContext(TalentJobContext)

  const { getJob: getJobService } = talentJobService()

  const setJob = async (job: ITalentJob) => {
    if (!job.id) return

    dispatch({
      type: TalentJobActionEnum.SET_JOB,
      payload: job,
    })
  }

  const getJob = async (jobId: string) => {
    if (!jobId) return

    dispatch({
      type: TalentJobActionEnum.GET_JOB_BEGIN,
    })

    const { data, error } = await getJobService(jobId)

    if (error) {
      dispatch({
        type: TalentJobActionEnum.GET_JOB_FAILURE,
      })
    } else {
      dispatch({
        type: TalentJobActionEnum.GET_JOB_SUCCESS,
        payload: data as ITalentJob,
      })
    }
  }

  const clearJob = async () => {
    dispatch({
      type: TalentJobActionEnum.CLEAR_JOB,
    })
  }

  return {
    setJob,
    getJob,
    clearJob,
  }
}
