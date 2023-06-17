import React from "react"
import { Avatar } from "ui-library/avatar/avatar/Avatar"

export const Intro = () => {
  return (
    <div className="divide-y">
      <div className="flex gap-4 mb-4">
        <Avatar
          size={20}
          image_url="https://plus.unsplash.com/premium_photo-1663100696872-43eea3bf307b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl">User name</h1>
        </div>
      </div>
    </div>
  )
}
