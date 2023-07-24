import { IIndustry } from "state/industry/industry.types"
import {
  ICompanyProfile,
  CompanyProfileActionEnum,
  CompanyProfileAction,
  CompanyProfileState,
} from "./companyProfile.types"

export const companyProfileReducer = (
  state: CompanyProfileState,
  action: CompanyProfileAction
): CompanyProfileState => {
  console.log(action)
  switch (action.type) {
    case CompanyProfileActionEnum.GET_COMPANY_PROFILE_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      }

    case CompanyProfileActionEnum.GET_COMPANY_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case CompanyProfileActionEnum.GET_COMPANY_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload as ICompanyProfile,
      }

    case CompanyProfileActionEnum.ADD_INDUSTRY:
      const add_industry_payload = action.payload as IIndustry
      return {
        ...state,
        data: {
          ...state.data,
          industry: [...state.data.industry, add_industry_payload],
        },
      }

    case CompanyProfileActionEnum.REMOVE_INDUSTRY:
      const remove_industry_payload = action.payload as IIndustry
      return {
        ...state,
        data: {
          ...state.data,
          industry: [
            ...state.data.industry.filter(
              (i) => i.id !== remove_industry_payload.id
            ),
          ],
        },
      }

    default:
      return state
  }
}
