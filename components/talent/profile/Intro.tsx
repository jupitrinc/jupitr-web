import React from "react"
import { UserType } from "state/user/user.types"
import { Avatar } from "ui-library/avatar/avatar/Avatar"

interface props {
  user: UserType
}

export const Intro: React.FC<props> = ({ user }) => {
  return (
    <div className="divide-y">
      <div className="flex gap-4 mb-4">
        <Avatar size={20} image_url={user.avatar} />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl">{user.name}</h1>
        </div>
      </div>
    </div>
  )
}
