import {
  LocalStorageItemEnum,
  localStorageHelper,
} from "helper/localStorageHelper"
import {
  IIndustry,
  IndustryAction,
  IndustryActionEnum,
  IndustryState,
} from "./industry.types"

export const companyProfileReducer = (
  state: IndustryState,
  action: IndustryAction
): IndustryState => {
  const { setItem } = localStorageHelper

  switch (action.type) {
    case IndustryActionEnum.GET_INDUSTRIES_BEGIN:
      return {
        ...state,
        loading: true,
      }

    case IndustryActionEnum.GET_INDUSTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
      }

    case IndustryActionEnum.GET_INDUSTRIES_SUCCESS:
      setItem(LocalStorageItemEnum.industries, action.payload)

      return {
        ...state,
        loading: false,
        data: action.payload as IIndustry[],
      }

    case IndustryActionEnum.CLEAR_INDUSTRIES:
      return {
        ...state,
        data: [] as IIndustry[],
      }

    default:
      return state
  }
}
