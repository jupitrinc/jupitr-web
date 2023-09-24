import { useContext } from "react"
import { IIndustry, IndustryActionEnum } from "./industry.types"
import { IndustryContext } from "./IndustryContext"
import industryService from "../../services/industry/industryService"
import {
  LocalStorageItemEnum,
  localStorageHelper,
} from "helper/localStorageHelper"
import { useNotificationAction } from "state/notification/useNotificationAction"

export function useIndustryAction() {
  const { notify } = useNotificationAction()

  const { dispatch } = useContext(IndustryContext)
  const { getAllIndustries } = industryService()

  const { getItem } = localStorageHelper

  const getIndustries = async () => {
    dispatch({
      type: IndustryActionEnum.GET_INDUSTRIES_BEGIN,
    })

    if (getItem(LocalStorageItemEnum.industries)) {
      dispatch({
        type: IndustryActionEnum.GET_INDUSTRIES_SUCCESS,
        payload: getItem(LocalStorageItemEnum.industries) as IIndustry[],
      })
    } else {
      const { data, error } = await getAllIndustries()

      if (error) {
        dispatch({
          type: IndustryActionEnum.GET_INDUSTRIES_FAILURE,
        })

        notify({
          message: "Failed to fetch industries",
          type: "warning",
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
