import { useUserState } from "state/user/useUserState"
import { AccountTypeEnum } from "state/user/user.types"

export const useProfileChecks = () => {
  const { user, accountType } = useUserState()

  const socials = () => {
    return (
      user.socials !== null && user.socials.find((social) => social.url !== "")
    )
  }

  const skills = () => {
    return user.skills?.length >= 3
  }

  const name = () => {
    return Boolean(user.name)
  }

  const location = () => {
    return Boolean(user.location?.id)
  }

  const checksCompleted = () => {
    return (
      accountType === AccountTypeEnum.company ||
      (name() && socials() && skills() && location())
    )
  }

  return { name, socials, skills, location, checksCompleted }
}
