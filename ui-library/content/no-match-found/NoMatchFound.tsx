import React from "react"
import Link from "next/link"
import { Text } from "ui-library/text/Text"
import { Button } from "ui-library/button/Button"

interface props {
  message: string
  link?: string
  label?: string
}

export const NoMatchFound: React.FC<props> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Text as="span">{props.message}</Text>

      {props.label && (
        <Link href={`${props.link}`}>
          <Button label={props.label} variant="outlined" />
        </Link>
      )}
    </div>
  )
}
