import React from "react"
import Link from "next/link"
import { Text } from "ui-library/text/Text"
import { Button } from "ui-library/button/Button"

interface props {
  message: string
  link: string
  label: string
}

const NoMatchFound: React.FC<props> = (props) => {
  return (
    <div className="flex flex-col gap-5 items-center fixed top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <Text as="span">{props.message}</Text>

      <Link href={`${props.link}`}>
        <Button label={props.label} variant="outlined" />
      </Link>
    </div>
  )
}

export default NoMatchFound
