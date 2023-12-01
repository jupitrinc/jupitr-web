import React from "react"
import Searching from "./Searching"
import { Eye } from "lucide-react"
import router from "next/router"
import { Button } from "ui-library/button/Button"
import { useUserState } from "state/user/useUserState"

const ProfileActions = () => {
  const { user } = useUserState()
  return (
    <div className="my-2 flex items-center justify-between rounded-lg bg-white p-4 text-center sm:gap-4">
      <div className="flex justify-center text-center">
        <Searching />
      </div>
      <Button
        label="View public profile"
        size="xs"
        color="special"
        variant="text"
        icon={<Eye className="h-4 w-4" />}
        onClick={() => router.push(`/profile/${user.username}`)}
      />
    </div>
  )
}

export default ProfileActions
