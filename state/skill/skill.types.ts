export interface ISkillContext {
  state: SkillState
  dispatch: ({ type }: SkillAction) => void
}

export type SkillState = {
  data: skill[]
  loading: boolean
  error: boolean
}

type skill = { id: string; name: string }

export type SkillAction = {
  type:
    | SkillActionEnum.GET_SKILLS_BEGIN
    | SkillActionEnum.GET_SKILLS_FAILURE
    | SkillActionEnum.GET_SKILLS_SUCCESS
  payload?: skill[] | skill
}

export enum SkillActionEnum {
  GET_SKILLS_BEGIN = "GET_SKILLS_BEGIN",
  GET_SKILLS_FAILURE = "GET_SKILLS_FAILURE",
  GET_SKILLS_SUCCESS = "GET_SKILLS_SUCCESS",
}
