import React from "react"
import { UserAvatar } from "./UserAvatar"
import { UserName } from "./UserName"

export const UserProfile = () => {
  return (
    <div className="space-y-5 text-center">
      <UserAvatar />
      <UserName />
    </div>
  )
}
