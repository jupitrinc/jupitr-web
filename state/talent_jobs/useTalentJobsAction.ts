import { useContext } from "react"
import { TalentJobsActionEnum } from "./talentJobs.types"
import { TalentJobsContext } from "./TalentJobsContext"
import talentJobService from "services/talent/talentJobService"
import { ITalentJob } from "state/talent_job/talentJob.types"
import { ISkill } from "../talent_profile/talentProfile.types"

export function useTalentJobsAction() {
  const { dispatch } = useContext(TalentJobsContext)
  const { getJobs: getJobsService } = talentJobService()

  const getJobs = async (payload: { user_id: string; skills: ISkill[] }) => {
    if (!payload.user_id || !payload.skills.length) return

    dispatch({
      type: TalentJobsActionEnum.GET_JOBS_BEGIN,
    })

    const { data, error } = await getJobsService(payload)

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
