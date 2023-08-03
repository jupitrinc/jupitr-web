import { useContext } from "react"
import { IIndustry, IndustryActionEnum } from "./industry.types"
import { IndustryContext } from "./IndustryContext"
import useIndustryService from "../../services/industry/useIndustryService"

export function useIndustryAction() {
  const { dispatch } = useContext(IndustryContext)
  const { getAllIndustries } = useIndustryService()

  const getIndustries = async () => {
    dispatch({
      type: IndustryActionEnum.GET_INDUSTRIES_BEGIN,
    })

    const { data, error } = await getAllIndustries()

    if (error) {
      dispatch({
        type: IndustryActionEnum.GET_INDUSTRIES_FAILURE,
      })
    } else {
      dispatch({
        type: IndustryActionEnum.GET_INDUSTRIES_SUCCESS,
        payload: data as IIndustry[],
      })
    }
  }

  return {
    getIndustries,
  }
}
