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
  logo: EventTarget | File | FileList | string | unknown
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
    | CompanyProfileActionEnum.UPDATE_LOGO
    | CompanyProfileActionEnum.UPDATE_NAME
    | CompanyProfileActionEnum.UPDATE_YEAR_FOUNDED
    | CompanyProfileActionEnum.UPDATE_WEBSITE
    | CompanyProfileActionEnum.UPDATE_SIZE
    | CompanyProfileActionEnum.UPDATE_INDUSTRY
    | CompanyProfileActionEnum.UPDATE_MISSION

  payload?:
    | ICompanyProfile
    | IIndustry
    | ICompanyProfile["logo"]
    | ICompanyProfile["name"]
    | ICompanyProfile["year_founded"]
    | ICompanyProfile["website"]
    | ICompanyProfile["size"]
    | ICompanyProfile["industry"]
    | ICompanyProfile["mission"]
}

export enum CompanyProfileActionEnum {
  GET_COMPANY_PROFILE_BEGIN = "GET_COMPANY_PROFILE_BEGIN",
  GET_COMPANY_PROFILE_FAILURE = "GET_COMPANY_PROFILE_FAILURE",
  GET_COMPANY_PROFILE_SUCCESS = "GET_COMPANY_PROFILE_SUCCESS",

  UPDATE_LOGO = "UPDATE_LOGO",
  UPDATE_NAME = "UPDATE_NAME",
  UPDATE_YEAR_FOUNDED = "UPDATE_YEAR_FOUNDED",
  UPDATE_WEBSITE = "UPDATE_WEBSITE",
  UPDATE_SIZE = "UPDATE_SIZE",
  UPDATE_INDUSTRY = "UPDATE_INDUSTRY",
  UPDATE_MISSION = "UPDATE_MISSION",
}

export type AddCompany = Omit<
  ICompanyProfile,
  "id" | "created_at" | "updated_at" | "logo"
> & {
  email: string
  logo: EventTarget | File | FileList | string | unknown
}
