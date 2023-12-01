import React from "react"
import { Loader } from "ui-library/loader/Loader"
import { Text } from "ui-library/text/Text"

interface props {
  showLabel?: boolean
}

export const Loading = (props: props) => {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col items-center space-y-4 pt-20">
      <Loader color="standard" className="h-5 w-5" />
      {props.showLabel && <Text as="span">Loading...</Text>}
    </div>
  )
}
