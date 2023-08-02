import { useContext } from "react"
import { ITalentProfile, TalentProfileActionEnum } from "./talentProfile.types"
import { ISkill } from "state/skill/skill.types"
import { useTalentProfileService } from "services/talent/useTalentProfileService"
import { UserContext } from "state/user/UserContextProvider"

export function useTalentProfileAction() {
  const { updateProfile } = useTalentProfileService()
  const { dispatch } = useContext(UserContext)

  const updateSocials = async (
    user_id: ITalentProfile["user_id"],
    socials: ITalentProfile["socials"]
  ) => {
    if (!user_id) return

    const { data, error } = await updateProfile({
      user_id: user_id,
      socials: socials,
    })

    if (data) {
      dispatch({
        type: TalentProfileActionEnum.UPDATE_SOCIALS,
        payload: data.socials,
      })
    }
  }

  const updateLocation = async (
    user_id: ITalentProfile["user_id"],
    newLocation: ITalentProfile["preferences"]["location"],
    preferences: ITalentProfile["preferences"]
  ) => {
    if (!user_id) return

    const { data, error } = await updateProfile({
      user_id: user_id,
      preferences: { ...preferences, location: newLocation },
    })

    if (data) {
      dispatch({
        type: TalentProfileActionEnum.UPDATE_LOCATION,
        payload: data.preferences,
      })
    }
  }

  const addSkill = async (
    user_id: ITalentProfile["user_id"],
    newSkill: ISkill,
    skills: ISkill[]
  ) => {
    if (
      !user_id ||
      !newSkill.id ||
      (skills && skills.filter((s) => s.id === newSkill.id).length > 0)
    )
      return

    const { data, error } = await updateProfile({
      user_id: user_id,
      skills: skills ? [...skills, newSkill] : [newSkill],
    })

    if (data) {
      dispatch({
        type: TalentProfileActionEnum.ADD_SKILL,
        payload: data.skills,
      })
    }
  }

  const removeSkill = async (
    user_id: ITalentProfile["user_id"],
    skill: ISkill,
    skills: ISkill[]
  ) => {
    if (!user_id || !skill.id) return

    const { data, error } = await updateProfile({
      user_id: user_id,
      skills: skills.filter((s) => s.id !== skill.id),
    })

    if (data) {
      dispatch({
        type: TalentProfileActionEnum.REMOVE_SKILL,
        payload: data.skills,
      })
    }
  }

  const updateSkill = async (
    user_id: ITalentProfile["user_id"],
    skill: ISkill,
    skills: ISkill[]
  ) => {
    if (!user_id || !skill.id) return

    const { data, error } = await updateProfile({
      user_id: user_id,
      skills: skills.map((s) => {
        if (s.id === skill.id) {
          return {
            ...s,
            level: skill.level,
          }
        }
        return s
      }),
    })

    if (data) {
      dispatch({
        type: TalentProfileActionEnum.REMOVE_SKILL,
        payload: data.skills,
      })
    }
  }

  return {
    updateSocials,
    updateLocation,
    addSkill,
    removeSkill,
    updateSkill,
  }
}
