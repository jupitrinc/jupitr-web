import React from "react"
import { useUserState } from "state/user/useUserState"
import { UserAvatar } from "./UserAvatar"
import { UserName } from "./UserName"

export const UserProfile = () => {
  const { user } = useUserState()

  return (
    <div className="space-y-5 text-center">
      <UserAvatar avatar={user.avatar_url} />
      <UserName name={user.name} />
    </div>
  )
}
