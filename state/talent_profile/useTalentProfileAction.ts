import { useContext } from "react"
import {
  ISkill,
  ITalentProfile,
  TalentProfileActionEnum,
  UpdateAllSkillsPayload,
  UpdateIntroVideoPayload,
} from "./talentProfile.types"
import { talentProfileService } from "services/talent/talentProfileService"
import { UserContext } from "state/user/UserContextProvider"
import { storageFolderHelper } from "helper/storageFolderHelper"
import mediaService from "services/storage/mediaService"
import { useNotificationAction } from "state/notification/useNotificationAction"

export function useTalentProfileAction() {
  const { updateProfile } = talentProfileService()
  const { dispatch } = useContext(UserContext)
  const { uploadVideo } = mediaService()
  const { notify } = useNotificationAction()

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
    skills: ITalentProfile["skills"]
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
    skills: ITalentProfile["skills"]
  ) => {
    if (!user_id || !skill.id || !skills) return

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
    skills: ITalentProfile["skills"]
  ) => {
    if (!user_id || !skill.id || !skills) return

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
      !payload.application_skills ||
      payload.application_skills.length === 0
    )
      return

    const new_skills: ISkill[] = []
    payload.application_skills.forEach((application_skill) => {
      if (!payload.talent_skills || payload.talent_skills.length === 0) {
        new_skills.push(application_skill)
      } else {
        if (
          !payload.talent_skills.find(
            (talent_skill) => talent_skill.id === application_skill.id
          )
        ) {
          new_skills.push(application_skill)
        }
      }
    })

    const updated_skills = [...payload.talent_skills, ...new_skills]
    updated_skills.forEach((updated_skill) => {
      payload.application_skills.forEach((application_skill) => {
        if (
          updated_skill.id === application_skill.id &&
          updated_skill.level !== application_skill.level
        ) {
          updated_skill.level = application_skill.level
        }
      })
    })
    const { data } = await updateProfile(payload.user_id, {
      skills: updated_skills,
    })

    if (data) {
      dispatch({
        type: TalentProfileActionEnum.UPDATE_SKILLS,
        payload: data.skills,
      })
    }
  }

  const updateIntroVideo = async (payload: UpdateIntroVideoPayload) => {
    if (!payload.user_id || !payload.file) return

    dispatch({
      type: TalentProfileActionEnum.UPDATE_INTRO_VIDEO_BEGIN,
    })

    const folderPath = storageFolderHelper.talentIntroVideoFolder(
      payload.user_id
    )
    const fileName = payload.user_id

    const { data: upload_data, error: upload_error } = await uploadVideo({
      file: payload.file,
      folderPath: folderPath as string,
      fileName: fileName,
    })

    if (upload_error) {
      dispatch({
        type: TalentProfileActionEnum.UPDATE_INTRO_VIDEO_FAILURE,
      })

      notify({
        message: "Failed to upload intro video. Try again",
        type: "warning",
      })
    } else {
      const cdn_video = upload_data.public_id

      const { data } = await updateProfile(payload.user_id, {
        intro_video: cdn_video,
      })

      if (data) {
        dispatch({
          type: TalentProfileActionEnum.UPDATE_INTRO_VIDEO_SUCCESS,
          payload: data.intro_video,
        })
      }
    }
  }

  const updateVisibility = async (
    user_id: ITalentProfile["user_id"],
    visibility: ITalentProfile["visibility"]
  ) => {
    if (!user_id) return

    const { data } = await updateProfile(user_id, {
      visibility,
    })

    if (data) {
      dispatch({
        type: TalentProfileActionEnum.UPDATE_VISIBILITY,
        payload: data.visibility,
      })
    }
  }

  const updateTagline = async (
    user_id: ITalentProfile["user_id"],
    tagline: ITalentProfile["tagline"]
  ) => {
    if (!user_id) return

    const { data } = await updateProfile(user_id, {
      tagline,
    })

    if (data) {
      dispatch({
        type: TalentProfileActionEnum.UPDATE_TAGLINE,
        payload: data.tagline,
      })
    }
  }

  return {
    updateSocials,
    toggleSearching,
    addSkill,
    removeSkill,
    updateSkill,
    updateAllSkills,
    updateIntroVideo,
    updateVisibility,
    updateTagline,
  }
}
