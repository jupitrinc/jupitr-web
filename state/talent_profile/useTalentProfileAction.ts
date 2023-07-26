import { useContext } from "react"
import { TalentProfileActionEnum } from "./talentProfile.types"
import { TalentProfileContext } from "./TalentProfileContext"
import { ISkill } from "state/skill/skill.types"

export function useTalentProfileAction() {
  const { dispatch } = useContext(TalentProfileContext)

  const getProfile = async (language: string) => {
    if (!language) return

    const catchError = (errorMessage: string) => {
      dispatch({
        type: TalentProfileActionEnum.GET_TALENT_PROFILE_FAILURE,
      })

      console.log(errorMessage)
    }

    try {
      dispatch({
        type: TalentProfileActionEnum.GET_TALENT_PROFILE_BEGIN,
      })

      /* const response = await fetchRepos(language)
      if (response) {
        if (!response.ok) {
          getReposFailed(`No repositories found for the keyword ${language} :(`)
        } else {
          const data = await response.json()
          if (data.items) {
            dispatch({
              type: TalentProfileActionEnum.GET_USER_SUCCESS,
              payload: data.items,
            })
          }
        }
      } */
    } catch (error) {
      catchError(error as string)
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
    getProfile,
    addSkill,
    removeSkill,
  }
}
