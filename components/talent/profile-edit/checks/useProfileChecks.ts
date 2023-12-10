import { useUserState } from "state/user/useUserState"
import { AccountTypeEnum } from "state/user/user.types"

export const useProfileChecks = () => {
  const { user, accountType } = useUserState()

  const socials = () => {
    return Boolean(
      user.socials && user.socials.find((social) => social.url !== "")
    )
  }

  const skills = () => {
    return Boolean(user.skills && user.skills.length >= 3)
  }

  const projects = () => {
    return Boolean(user.projects && user.projects.length >= 1)
  }

  const name = () => {
    return Boolean(user.name)
  }

  const location = () => {
    return Boolean(user.location?.id)
  }

  const introVideo = () => {
    return Boolean(user.intro_video)
  }

  const checksCompleted = () => {
    return Boolean(
      accountType === AccountTypeEnum.company ||
        (name() && socials() && skills() && projects() && introVideo())
    )
  }

  return {
    name,
    socials,
    skills,
    introVideo,
    checksCompleted,
    projects,
    location,
  }
}
