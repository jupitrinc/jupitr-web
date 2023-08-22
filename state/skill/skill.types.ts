export interface ISkillContext {
  state: SkillState
  dispatch: ({ type }: SkillAction) => void
}

export type SkillState = {
  data: skill[]
  loading: boolean
  error: string
}

type skill = { id: string; name: string }

export type SkillAction = {
  type:
    | SkillActionEnum.GET_SKILLS_BEGIN
    | SkillActionEnum.GET_SKILLS_FAILURE
    | SkillActionEnum.GET_SKILLS_SUCCESS
    | SkillActionEnum.CLEAR_SKILLS
    | SkillActionEnum.ADD_SKILL_BEGIN
    | SkillActionEnum.ADD_SKILL_FAILURE
    | SkillActionEnum.ADD_SKILL_SUCCESS
  payload?: skill[] | skill | string
}

export enum SkillActionEnum {
  GET_SKILLS_BEGIN = "GET_SKILLS_BEGIN",
  GET_SKILLS_FAILURE = "GET_SKILLS_FAILURE",
  GET_SKILLS_SUCCESS = "GET_SKILLS_SUCCESS",

  ADD_SKILL_BEGIN = "ADD_SKILL_BEGIN",
  ADD_SKILL_FAILURE = "ADD_SKILL_FAILURE",
  ADD_SKILL_SUCCESS = "ADD_SKILL_SUCCESS",

  CLEAR_SKILLS = "CLEAR_SKILLS",
}
