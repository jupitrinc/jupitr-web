import React from "react"
import { Loader } from "ui-library/loader/Loader"
import { Text } from "ui-library/text/Text"

export const Loading = () => {
  return (
    <div className="max-w-sm mx-auto flex flex-col space-y-4 w-full items-center pt-20">
      <Loader color="standard" className="w-5 h-5" />
      <Text as="span">Loading...</Text>
    </div>
  )
}
