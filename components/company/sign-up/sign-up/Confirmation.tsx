import Link from "next/link"
import { Button } from "ui-library/button/Button"
import { Text } from "ui-library/text/Text"

const Confirmation = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-2 justify-center items-center">
        <Text as="h1" size="xl">
          Sign in
        </Text>
      </div>

      <Text as="p">
        using the <span className="font-medium">Magic Link</span> sent to your
        inbox.
      </Text>

      <div className="flex flex-row gap-2 items-center mt-20 mx-auto">
        <Text as="p" size="sm">
          {"haven't received the link?"}
        </Text>

        <Link href="/">
          <Button label="Try again" size="xs" variant="text" />
        </Link>
      </div>
    </div>
  )
}

export default Confirmation
