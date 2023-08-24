import { SendIcon } from "lucide-react"
import Link from "next/link"
import { themeStyles } from "ui-library/_theme/Theme.styles"
import { Button } from "ui-library/button/Button"
import { Text } from "ui-library/text/Text"

const Confirmation = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-2 justify-center items-center">
        <SendIcon
          className={`h-6 w-6 ${themeStyles.textColor.standard[600]}`}
        />
        <Text as="h1" size="xl2">
          Verify account
        </Text>
      </div>

      <Text as="p" size="lg">
        using the one-time-password (OTP) sent to your inbox.
      </Text>

      <div className="flex flex-row gap-2 items-center mt-20 mx-auto">
        <Text as="p" size="sm">
          {"haven't received the password?"}
        </Text>

        <Link href="/">
          <Button label="Sign in" size="xs" variant="text" />
        </Link>
      </div>
    </div>
  )
}

export default Confirmation
