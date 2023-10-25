import { useContext } from "react"
import {
  ISkill,
  ITalentProfile,
  TalentProfileActionEnum,
  UpdateAllSkillsPayload,
} from "./talentProfile.types"
import { talentProfileService } from "services/talent/talentProfileService"
import { UserContext } from "state/user/UserContextProvider"

export function useTalentProfileAction() {
  const { updateProfile } = talentProfileService()
  const { dispatch } = useContext(UserContext)

  const updateSocials = async (
    user_id: ITalentProfile["user_id"],
    socials: ITalentProfile["socials"]
  ) => {
    if (!user_id) return

    const { data } = await updateProfile(user_id, {
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

    const { data } = await updateProfile(user_id, {
      preferences: { ...preferences, location: newLocation },
    })

    if (data) {
      dispatch({
        type: TalentProfileActionEnum.UPDATE_LOCATION,
        payload: data.preferences,
      })
    }
  }

  const toggleSearching = async (
    user_id: ITalentProfile["user_id"],
    searching: ITalentProfile["searching"]
  ) => {
    if (!user_id) return

    const { data } = await updateProfile(user_id, {
      searching: searching,
    })

    if (data) {
      dispatch({
        type: TalentProfileActionEnum.TOGGLE_SEARCHING,
        payload: data.searching,
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

    const { data } = await updateProfile(user_id, {
      skills: skills ? [...skills, newSkill] : [newSkill],
    })

    if (data) {
      dispatch({
        type: TalentProfileActionEnum.UPDATE_SKILLS,
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

    const { data } = await updateProfile(user_id, {
      skills: skills.filter((s) => s.id !== skill.id),
    })

    if (data) {
      dispatch({
        type: TalentProfileActionEnum.UPDATE_SKILLS,
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

    const { data } = await updateProfile(user_id, {
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
        type: TalentProfileActionEnum.UPDATE_SKILLS,
        payload: data.skills,
      })
    }
  }

  const updateAllSkills = async (payload: UpdateAllSkillsPayload) => {
    if (
      !payload.user_id ||
      !payload.talent_skills ||
      payload.talent_skills.length === 0 ||
      !payload.application_skills ||
      payload.application_skills.length === 0
    )
      return

    const new_skills: ISkill[] = []
    for (let i = 0; i < payload.application_skills.length; i++) {
      for (let j = 0; j < payload.talent_skills.length; j++) {
        if (payload.application_skills[i].id !== payload.talent_skills[j].id) {
          new_skills.push(payload.application_skills[i])
        }
      }
    }

    const updated_skills = [...payload.talent_skills, ...new_skills]
    for (let i = 0; i < payload.application_skills.length; i++) {
      for (let j = 0; j < updated_skills.length; j++) {
        if (
          payload.application_skills[i].id === updated_skills[j].id &&
          payload.application_skills[i].level !== updated_skills[j].level
        ) {
          updated_skills[j].level = payload.application_skills[i].level
        }
      }
    }

    const { data } = await updateProfile(payload.user_id, {
      skills: [...updated_skills],
    })

    if (data) {
      dispatch({
        type: TalentProfileActionEnum.UPDATE_SKILLS,
        payload: data.skills,
      })
    }
  }

  return {
    updateSocials,
    updateLocation,
    toggleSearching,
    addSkill,
    removeSkill,
    updateSkill,
    updateAllSkills,
  }
}
