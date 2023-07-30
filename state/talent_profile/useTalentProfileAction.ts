import { useContext } from "react"
import { ITalentProfile, TalentProfileActionEnum } from "./talentProfile.types"
import { TalentProfileContext } from "./TalentProfileContext"
import { ISkill } from "state/skill/skill.types"

export function useTalentProfileAction() {
  const { dispatch } = useContext(TalentProfileContext)

  const setProfile = async (user: ITalentProfile) => {
    dispatch({
      type: TalentProfileActionEnum.SET_TALENT_PROFILE_BEGIN,
    })

    if (!user.user_id) {
      dispatch({
        type: TalentProfileActionEnum.SET_TALENT_PROFILE_FAILURE,
        payload: "Failed to get talent profile",
      })
    } else {
      dispatch({
        type: TalentProfileActionEnum.SET_TALENT_PROFILE_SUCCESS,
        payload: user,
      })
    }
  }

  const addSkill = (skill: ISkill) => {
    const { id, name, level } = skill
    if (!id || !name.trim() || !level) return

    dispatch({
      type: TalentProfileActionEnum.ADD_SKILL,
      payload: skill,
    })
  }

  const removeSkill = (skill: ISkill) => {
    const { id, name, level } = skill
    if (!id || !name.trim() || !level) return

    dispatch({
      type: TalentProfileActionEnum.REMOVE_SKILL,
      payload: skill,
    })
  }

  return {
    setProfile,
    addSkill,
    removeSkill,
  }
}
