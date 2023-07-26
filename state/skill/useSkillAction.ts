import { useContext } from "react"
import { SkillActionEnum } from "./skill.types"
import { SkillContext } from "./SkillContext"

export function useSkillAction() {
  const { dispatch } = useContext(SkillContext)

  const getSkills = async () => {
    dispatch({
      type: SkillActionEnum.GET_SKILLS_BEGIN,
    })

    /* const { industry, error } = await getAllIndustries()

    if (error) {
      dispatch({
        type: SkillActionEnum.GET_SKILLS_FAILURE,
      })
    } else {
      dispatch({
        type: SkillActionEnum.GET_SKILLS_SUCCESS,
        payload: industry,
      })
    } */
  }

  return {
    getSkills,
  }
}
