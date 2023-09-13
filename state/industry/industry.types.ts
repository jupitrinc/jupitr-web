export interface IIndustryContext {
  state: IndustryState
  dispatch: ({ type }: IndustryAction) => void
}

export type IndustryState = {
  data: IIndustry[]
  loading: boolean
}

export type IIndustry = { id: string; name: string }

export type IndustryAction = {
  type:
    | IndustryActionEnum.GET_INDUSTRIES_BEGIN
    | IndustryActionEnum.GET_INDUSTRIES_FAILURE
    | IndustryActionEnum.GET_INDUSTRIES_SUCCESS
    | IndustryActionEnum.CLEAR_INDUSTRIES
  payload?: IIndustry[]
}

export enum IndustryActionEnum {
  GET_INDUSTRIES_BEGIN = "GET_INDUSTRIES_BEGIN",
  GET_INDUSTRIES_FAILURE = "GET_INDUSTRIES_FAILURE",
  GET_INDUSTRIES_SUCCESS = "GET_INDUSTRIES_SUCCESS",

  CLEAR_INDUSTRIES = "CLEAR_INDUSTRIES",
}
