import React from "react"
import { Rocket } from "lucide-react"
import { Text } from "ui-library/text/Text"
import { useRouter } from "next/router"

const Footer = () => {
  const router = useRouter()

  const goHome = () => {
    router.push("/")
  }

  return (
    <div className="mt-5 flex flex-row items-center justify-center gap-1">
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
}

export default Footer
