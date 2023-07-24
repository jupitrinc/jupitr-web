import { useContext } from "react"
import { CompanyMemberProfileActionEnum } from "./companyMemberProfile.types"
import { CompanyMemberProfileContext } from "./CompanyMemberProfileContext"

export function useCompanyMemberProfileAction() {
  const { dispatch } = useContext(CompanyMemberProfileContext)

  const getProfile = async (language: string) => {
    if (!language) return

    const catchError = (errorMessage: string) => {
      dispatch({
        type: CompanyMemberProfileActionEnum.GET_COMPANY_MEMBER_PROFILE_FAILURE,
      })

      console.log(errorMessage)
    }

    try {
      dispatch({
        type: CompanyMemberProfileActionEnum.GET_COMPANY_MEMBER_PROFILE_BEGIN,
      })

      /* const response = await fetchRepos(language)
      if (response) {
        if (!response.ok) {
          getReposFailed(`No repositories found for the keyword ${language} :(`)
        } else {
          const data = await response.json()
          if (data.items) {
            dispatch({
              type: CompanyMemberProfileActionEnum.GET_USER_SUCCESS,
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
    getProfile,
  }
}
