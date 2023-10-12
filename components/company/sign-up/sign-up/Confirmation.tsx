import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "ui-library/button/Button"
import { Text } from "ui-library/text/Text"

const Confirmation = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-2 justify-center items-center">
        <Check className="h-5 w-5 text-gray-600" />
        <Text as="h1" size="xl">
          Account created
        </Text>
      </div>

      <Text as="p">Sign in using the link sent to your inbox.</Text>

      <div className="flex flex-row gap-2 items-center mt-20 mx-auto">
        <Text as="p" size="sm">
          {"haven't received the link?"}
        </Text>

        <Link href="/login">
          <Button label="Sign in" size="xs" variant="text" />
        </Link>
      </div>
    </div>
  )
}

export default Confirmation
