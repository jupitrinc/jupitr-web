import React from "react"
import { Rocket } from "lucide-react"
import { Text } from "ui-library/text/Text"
import { useRouter } from "next/router"
import { useUserState } from "state/user/useUserState"

const Footer = () => {
  const router = useRouter()
  const { isLoggedIn } = useUserState()

  const goHome = () => {
    router.push("/")
  }

  return (
    !isLoggedIn && (
      <div className="sticky bottom-0 left-0 flex w-full justify-center bg-gray-100 px-5 py-3">
        <Text as="span" size="xs">
          <span className="flex flex-row gap-2">
            <span>Built with</span>
            <span
              className="flex flex-row gap-1 hover:cursor-pointer"
              onClick={goHome}
            >
              <Rocket className="h-4 w-4" />
              <span className="font-medium">jupitr</span>
            </span>
          </span>
        </Text>
      </div>
    )
  )
}

export default Footer
