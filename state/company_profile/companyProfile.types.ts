import { IIndustry } from "state/industry/industry.types"

export interface ICompanyProfileContext {
  state: CompanyProfileState
  dispatch: ({ type }: CompanyProfileAction) => void
}

export type CompanyProfileState = {
  data: ICompanyProfile
  loading: boolean
  error: boolean
}

export interface ICompanyProfile {
  id: string
  name: string
  logo: string
  year_founded: string
  website: string
  size: string
  mission: string
  industry: IIndustry[]
  created_at: string
  updated_at: string
}

export type CompanyProfileAction = {
  type:
    | CompanyProfileActionEnum.GET_COMPANY_PROFILE_BEGIN
    | CompanyProfileActionEnum.GET_COMPANY_PROFILE_FAILURE
    | CompanyProfileActionEnum.GET_COMPANY_PROFILE_SUCCESS
    | CompanyProfileActionEnum.ADD_INDUSTRY
    | CompanyProfileActionEnum.REMOVE_INDUSTRY

  payload?: ICompanyProfile | IIndustry
}

export enum CompanyProfileActionEnum {
  GET_COMPANY_PROFILE_BEGIN = "GET_COMPANY_PROFILE_BEGIN",
  GET_COMPANY_PROFILE_FAILURE = "GET_COMPANY_PROFILE_FAILURE",
  GET_COMPANY_PROFILE_SUCCESS = "GET_COMPANY_PROFILE_SUCCESS",

  ADD_INDUSTRY = "ADD_INDUSTRY",
  REMOVE_INDUSTRY = "REMOVE_INDUSTRY",
}
