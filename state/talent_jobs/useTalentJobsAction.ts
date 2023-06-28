import { useContext } from "react"
import { TalentJobsActionEnum } from "./talentJobs.types"
import { TalentJobsContext } from "./TalentJobsContext"

export function useTalentJobsAction() {
  const { dispatch } = useContext(TalentJobsContext)

  const getJobs = async (language: string) => {
    if (!language) return

    const catchError = (errorMessage: string) => {
      dispatch({
        type: TalentJobsActionEnum.GET_TALENT_JOBS_FAILURE,
      })

      console.log(errorMessage)
    }

    try {
      dispatch({
        type: TalentJobsActionEnum.GET_TALENT_JOBS_BEGIN,
      })

      /* const response = await fetchRepos(language)
      if (response) {
        if (!response.ok) {
          getReposFailed(`No repositories found for the keyword ${language} :(`)
        } else {
          const data = await response.json()
          if (data.items) {
            dispatch({
              type: TalentJobsActionEnum.GET_USER_SUCCESS,
              payload: data.items,
            })
          }
        }
      } */
    } catch (error) {
      catchError(error as string)
    }
  }

  return {
    getJobs,
  }
}
