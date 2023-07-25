import { useContext } from "react"
import { CompanyProfileActionEnum } from "./companyProfile.types"
import { CompanyProfileContext } from "./CompanyProfileContext"
import { IIndustry } from "state/industry/industry.types"

export function useCompanyProfileAction() {
  const { dispatch } = useContext(CompanyProfileContext)

  const getProfile = async (language: string) => {
    if (!language) return

    const catchError = (errorMessage: string) => {
      dispatch({
        type: CompanyProfileActionEnum.GET_COMPANY_PROFILE_FAILURE,
      })

      console.log(errorMessage)
    }

    try {
      dispatch({
        type: CompanyProfileActionEnum.GET_COMPANY_PROFILE_BEGIN,
      })

      /* const response = await fetchRepos(language)
      if (response) {
        if (!response.ok) {
          getReposFailed(`No repositories found for the keyword ${language} :(`)
        } else {
          const data = await response.json()
          if (data.items) {
            dispatch({
              type: CompanyProfileActionEnum.GET_USER_SUCCESS,
              payload: data.items,
            })
          }
        }
      } */
    } catch (error) {
      catchError(error as string)
    }
  }

  const addIndustry = (industry: IIndustry) => {
    if (!industry.name.trim()) return

    dispatch({
      type: CompanyProfileActionEnum.ADD_INDUSTRY,
      payload: industry,
    })
  }

  const removeIndustry = (industry: IIndustry) => {
    if (!industry.name.trim()) return

    dispatch({
      type: CompanyProfileActionEnum.REMOVE_INDUSTRY,
      payload: industry,
    })
  }

  return {
    getProfile,
    addIndustry,
    removeIndustry,
  }
}
