import { useContext } from "react"
import { SkillActionEnum } from "./skill.types"
import { SkillContext } from "./SkillContext"
import useSkillsService from "services/skills/useSkillsService"
import {
  LocalStorageItemEnum,
  localStorageHelper,
} from "helper/localStorageHelper"
import { ISkill } from "state/talent_profile/talentProfile.types"

export function useSkillAction() {
  const { dispatch } = useContext(SkillContext)
  const { getAllSkills } = useSkillsService()

  const { getItem } = localStorageHelper

  const getSkills = async () => {
    dispatch({
      type: SkillActionEnum.GET_SKILLS_BEGIN,
    })

    // 1. get the data from localStorage
    if (getItem(LocalStorageItemEnum.skills)) {
      dispatch({
        type: SkillActionEnum.GET_SKILLS_SUCCESS,
        payload: getItem(LocalStorageItemEnum.skills) as ISkill[],
      })

      // 2. get the data from db
    } else {
      const { data, error } = await getAllSkills()

      if (error) {
        dispatch({
          type: SkillActionEnum.GET_SKILLS_FAILURE,
        })
      } else {
        dispatch({
          type: SkillActionEnum.GET_SKILLS_SUCCESS,
          payload: data as ISkill[],
        })
      }
    }
  }
  return {
    getSkills,
  }
}
