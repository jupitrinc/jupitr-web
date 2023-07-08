import { useContext } from "react"
import { CompanyJobsActionEnum } from "./companyJobs.types"
import { CompanyJobsContext } from "./CompanyJobsContext"

export function useCompanyJobsAction() {
  const { dispatch } = useContext(CompanyJobsContext)

  const getJobs = async (language: string) => {
    if (!language) return

    const catchError = (errorMessage: string) => {
      dispatch({
        type: CompanyJobsActionEnum.GET_COMPANY_JOBS_FAILURE,
      })

      console.log(errorMessage)
    }

    try {
      dispatch({
        type: CompanyJobsActionEnum.GET_COMPANY_JOBS_BEGIN,
      })

      /* const response = await fetchRepos(language)
      if (response) {
        if (!response.ok) {
          getReposFailed(`No repositories found for the keyword ${language} :(`)
        } else {
          const data = await response.json()
          if (data.items) {
            dispatch({
              type: CompanyJobsActionEnum.GET_USER_SUCCESS,
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
