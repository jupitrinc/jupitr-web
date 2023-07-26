export interface ISkillContext {
  state: SkillState
  dispatch: ({ type }: SkillAction) => void
}

export type SkillState = {
  data: ISkill[]
  loading: boolean
  error: boolean
}

export type ISkill = {
  id: string
  name: string
  level: number
}

export type SkillAction = {
  type:
    | SkillActionEnum.GET_SKILLS_BEGIN
    | SkillActionEnum.GET_SKILLS_FAILURE
    | SkillActionEnum.GET_SKILLS_SUCCESS
  payload?: ISkill[] | ISkill
}

export enum SkillActionEnum {
  GET_SKILLS_BEGIN = "GET_SKILLS_BEGIN",
  GET_SKILLS_FAILURE = "GET_SKILLS_FAILURE",
  GET_SKILLS_SUCCESS = "GET_SKILLS_SUCCESS",
}
