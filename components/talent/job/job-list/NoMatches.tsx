import React from "react"
import { Text } from "ui-library/text/Text"
import { Button } from "ui-library/button/Button"
import Link from "next/link"

const NoMatches = () => {
  return (
    <div className="flex flex-col gap-5 items-center absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <Text as="span">0 jobs found matching your profile</Text>

      <Link href="/profile">
        <Button label="Update profile" variant="outlined" />
      </Link>
    </div>
  )
}

export default NoMatches
