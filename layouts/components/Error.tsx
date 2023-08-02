import React from "react"
import { Text } from "ui-library/text/Text"

const Error = () => {
  return (
    <div className="max-w-sm mx-auto flex flex-col space-y-4 w-full items-center pt-20">
      <Text as="h1" size="lg">
        404 Page not found
      </Text>
      <Text as="span">
        It looks like the page you requested does not exists.
      </Text>
    </div>
  )
}

export default Error
