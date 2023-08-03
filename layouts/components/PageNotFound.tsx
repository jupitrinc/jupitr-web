import { Rocket } from "lucide-react"
import Link from "next/link"
import React from "react"
import { Button } from "ui-library/button/Button"
import { Text } from "ui-library/text/Text"

const PageNotFound = () => {
  return (
    <div className="flex flex-col space-y-5 items-center">
      <div className="flex flex-row gap-2 items-center">
        <Rocket className="h-6 w-6 text-gray-600 animate-spin" />
        <Text as="span" size="xl2">
          Oops!
        </Text>
      </div>

      <Text as="span">Looks like you've landed on an alien planet</Text>

      <div>
        <Link href="/" className="mt-10 block">
          <Button label="Get me out of here" />
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
