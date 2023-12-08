import React from "react"
import UserAvatar from "./UserAvatar"
import UserName from "./UserName"
import Tagline from "components/talent/profile-edit/Tagline"

const UserProfile = () => {
  return (
    <div className="space-y-5 text-center">
      <UserAvatar />
      <UserName />
      <Tagline />
    </div>
  )
}

export default UserProfile
