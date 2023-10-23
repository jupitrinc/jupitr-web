import { useRouter } from "next/router"
import React from "react"
import { useUserState } from "state/user/useUserState"
import { Button } from "ui-library/button/Button"
import { Text } from "ui-library/text/Text"

const ProfileSocialCheck = () => {
  const router = useRouter()
  const { user } = useUserState()
  const isSocialsEmpty =
    user.socials === null ||
    user.socials.filter((social) => social.url === "").length > 0

  if (!isSocialsEmpty) return

  return (
    <div className="text-center mt-4 rounded-md p-10 text-gray-600 ring-gray-900/10 bg-gray-100">
      <Text as="span">Increase your profile&apos;s visibility</Text>
      <div className="flex justify-center mt-6">
        <Button
          label="Complete profile"
          size="base"
          color="special"
          onClick={() => router.push("/profile")}
        />
      </div>
    </div>
  )
}

export default ProfileSocialCheck
