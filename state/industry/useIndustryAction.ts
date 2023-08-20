import { useContext } from "react"
import { IIndustry, IndustryActionEnum } from "./industry.types"
import { IndustryContext } from "./IndustryContext"
import useIndustryService from "../../services/industry/useIndustryService"
import {
  LocalStorageItemEnum,
  localStorageHelper,
} from "helper/localStorageHelper"

export function useIndustryAction() {
  const { dispatch } = useContext(IndustryContext)
  const { getAllIndustries } = useIndustryService()

  const { getItem } = localStorageHelper

  const getIndustries = async () => {
    dispatch({
      type: IndustryActionEnum.GET_INDUSTRIES_BEGIN,
    })

    // 1. get the data from localStorage
    if (getItem(LocalStorageItemEnum.industries)) {
      dispatch({
        type: IndustryActionEnum.GET_INDUSTRIES_SUCCESS,
        payload: getItem(LocalStorageItemEnum.industries) as IIndustry[],
      })

      // 2. get the data from db
    } else {
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
  }

  const clearIndustries = () => {
    dispatch({
      type: IndustryActionEnum.CLEAR_INDUSTRIES,
    })
  }

  return {
    getIndustries,
    clearIndustries,
  }
}
