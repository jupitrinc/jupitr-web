import { useContext } from "react"
import { TalentJobsActionEnum } from "./talentJobs.types"
import { TalentJobsContext } from "./TalentJobsContext"
import useTalentJobService from "services/talent/useTalentJobService"
import { ITalentJob } from "state/talent_job/talentJob.types"
import { ISkill } from "../talent_profile/talentProfile.types"

export function useTalentJobsAction() {
  const { dispatch } = useContext(TalentJobsContext)
  const { getJobs: getJobsService } = useTalentJobService()

  const getJobs = async (skills: ISkill[]) => {
    dispatch({
      type: TalentJobsActionEnum.GET_JOBS_BEGIN,
    })
    const skillIds = skills.map((skill) => skill.id)
    const { data, error } = await getJobsService()

    if (error) {
      dispatch({
        type: TalentJobsActionEnum.GET_JOBS_FAILURE,
        payload: error.message,
      })
    } else {
      const filteredJobs = data?.filter((job: ITalentJob) =>
        job.skills.some((field) => skillIds.includes(field.id))
      )

      dispatch({
        type: TalentJobsActionEnum.GET_JOBS_SUCCESS,
        payload: filteredJobs as ITalentJob[],
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
