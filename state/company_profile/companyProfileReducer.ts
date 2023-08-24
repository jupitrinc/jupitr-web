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

    case CompanyProfileActionEnum.UPDATE_LOGO:
      const update_logo_payload = action.payload as ICompanyProfile["logo"]
      const update_logo_state = {
        ...state,
        data: {
          ...state.data,
          logo: update_logo_payload,
        },
      }

      console.log(update_logo_state.data)

      return update_logo_state

    case CompanyProfileActionEnum.UPDATE_NAME:
      const update_name_payload = action.payload as ICompanyProfile["name"]
      const update_name_state = {
        ...state,
        data: {
          ...state.data,
          name: update_name_payload,
        },
      }

      return update_name_state

    case CompanyProfileActionEnum.UPDATE_YEAR_FOUNDED:
      const update_year_founded_payload =
        action.payload as ICompanyProfile["year_founded"]
      const update_year_founded_state = {
        ...state,
        data: {
          ...state.data,
          year_founded: update_year_founded_payload,
        },
      }

      return update_year_founded_state

    case CompanyProfileActionEnum.UPDATE_WEBSITE:
      const update_website_payload =
        action.payload as ICompanyProfile["website"]
      const update_website_state = {
        ...state,
        data: {
          ...state.data,
          website: update_website_payload,
        },
      }

      return update_website_state

    case CompanyProfileActionEnum.UPDATE_SIZE:
      const update_size_payload = action.payload as ICompanyProfile["size"]
      const update_size_state = {
        ...state,
        data: {
          ...state.data,
          size: update_size_payload,
        },
      }

      return update_size_state

    case CompanyProfileActionEnum.UPDATE_INDUSTRY:
      const update_industry_payload =
        action.payload as ICompanyProfile["industry"]
      const update_industry_state = {
        ...state,
        data: {
          ...state.data,
          industry: update_industry_payload,
        },
      }

      return update_industry_state

    case CompanyProfileActionEnum.UPDATE_MISSION:
      const update_mission_payload =
        action.payload as ICompanyProfile["mission"]
      const update_mission_state = {
        ...state,
        data: {
          ...state.data,
          mission: update_mission_payload,
        },
      }

      return update_mission_state

    case CompanyProfileActionEnum.CLEAR_COMPANY_PROFILE:
      return {
        ...state,
        data: {} as ICompanyProfile,
      }

      return update_mission_state

    default:
      return state
  }
}
