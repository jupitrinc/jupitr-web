import { useContext } from "react"
import { TalentJobsActionEnum } from "./talentJobs.types"
import { TalentJobsContext } from "./TalentJobsContext"
import useTalentJobService from "services/talent/useTalentJobService"
import { ITalentJob } from "state/talent_job/talentJob.types"
import { ISkill } from "../talent_profile/talentProfile.types"
import useTalentApplicationService from "../../services/talent/useTalentApplicationService"

export function useTalentJobsAction() {
  const { dispatch } = useContext(TalentJobsContext)
  const { getJobs: getJobsService } = useTalentJobService()
  const { getApplications } = useTalentApplicationService()
  const getJobs = async (skills: ISkill[], user_id: string) => {
    dispatch({
      type: TalentJobsActionEnum.GET_JOBS_BEGIN,
    })
    const skillIds = skills.map((skill) => skill.id)
    const { data, error } = await getJobsService()
    const { data: jobsApplied, error: getApplicationsError } =
      await getApplications(user_id)

    if (error || getApplicationsError) {
      dispatch({
        type: TalentJobsActionEnum.GET_JOBS_FAILURE,
        payload: error.message,
      })
    } else {
      const filteredJobsByUserSkills = data?.filter((job: ITalentJob) =>
        job.skills.some((field) => skillIds.includes(field.id))
      )
      const removeJobsUserApplied = filteredJobsByUserSkills?.filter(
        (job: ITalentJob) =>
          !jobsApplied?.some((jApplied) => jApplied.job_id === job.id)
      )
      dispatch({
        type: TalentJobsActionEnum.GET_JOBS_SUCCESS,
        payload: removeJobsUserApplied as ITalentJob[],
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
