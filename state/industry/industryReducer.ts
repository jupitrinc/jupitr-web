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
  switch (action.type) {
    case IndustryActionEnum.GET_INDUSTRIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      }

    case IndustryActionEnum.GET_INDUSTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case IndustryActionEnum.GET_INDUSTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload as IIndustry[],
      }

    default:
      return state
  }
}
