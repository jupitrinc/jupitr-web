export interface ICompanyProfileContext {
  state: CompanyProfileState
  dispatch: ({ type }: CompanyProfileAction) => void
}

export type CompanyProfileState = {
  data: ICompanyProfile
  industries: IIndustry[]
  loading: boolean
  error: boolean
}

export type IIndustry = { id: string; name: string }

export interface ICompanyProfile {
  id: string
  name: string
  logo: string
  year_founded: string
  website: string
  size: string
  mission: string
  industry: IIndustry[]
}

export type CompanyProfileAction = {
  type:
    | CompanyProfileActionEnum.GET_COMPANY_PROFILE_BEGIN
    | CompanyProfileActionEnum.GET_COMPANY_PROFILE_FAILURE
    | CompanyProfileActionEnum.GET_COMPANY_PROFILE_SUCCESS
    | CompanyProfileActionEnum.GET_INDUSTRIES_BEGIN
    | CompanyProfileActionEnum.GET_INDUSTRIES_FAILURE
    | CompanyProfileActionEnum.GET_INDUSTRIES_SUCCESS
    | CompanyProfileActionEnum.ADD_INDUSTRY
    | CompanyProfileActionEnum.REMOVE_INDUSTRY

  payload?: ICompanyProfile | IIndustry | IIndustry[]
}

export enum CompanyProfileActionEnum {
  GET_COMPANY_PROFILE_BEGIN = "GET_COMPANY_PROFILE_BEGIN",
  GET_COMPANY_PROFILE_FAILURE = "GET_COMPANY_PROFILE_FAILURE",
  GET_COMPANY_PROFILE_SUCCESS = "GET_COMPANY_PROFILE_SUCCESS",

  GET_INDUSTRIES_BEGIN = "GET_INDUSTRIES_BEGIN",
  GET_INDUSTRIES_FAILURE = "GET_INDUSTRIES_FAILURE",
  GET_INDUSTRIES_SUCCESS = "GET_INDUSTRIES_SUCCESS",

  ADD_INDUSTRY = "ADD_INDUSTRY",
  REMOVE_INDUSTRY = "REMOVE_INDUSTRY",
}
