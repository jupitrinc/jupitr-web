import { useRouter } from "next/router"
import React from "react"
import { Button } from "ui-library/button/Button"
import { Text } from "ui-library/text/Text"

const NoSocialsAlert = () => {
  const router = useRouter()
  return (
    <div className="text-left mt-4 rounded py-2 px-4 text-gray-600 ring-gray-900/10 bg-gray-50">
      <Text as="span">
        It looks like you have not added your socials to your profile. Please,
        go ahead and update your Profile.
      </Text>
      <div className="flex justify-center mt-2">
        <Button
          label="Go to Profile"
          size="base"
          color="standard"
          variant="outlined"
          onClick={() => router.push("/profile")}
        />
      </div>
    </div>
  )
}

export default NoSocialsAlert
