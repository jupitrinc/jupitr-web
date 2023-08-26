import { useContext } from "react"
import { ITalentJob, TalentJobActionEnum } from "./talentJob.types"
import { TalentJobContext } from "./TalentJobContext"

export function useTalentJobAction() {
  const { dispatch } = useContext(TalentJobContext)

  const setJob = async (job: ITalentJob) => {
    if (!job.id) return

    dispatch({
      type: TalentJobActionEnum.SET_JOB,
      payload: job,
    })
  }

  return {
    setJob,
  }
}
