import React from "react"
import { Text } from "ui-library/text/Text"

const SectionHeader = ({
  title,
  subtitle,
  highlight,
}: {
  title: string
  subtitle: string
  highlight: string
}) => {
  const parts = title.split(new RegExp(`(${highlight})`, "gi"))
  return (
    <div className="text-center space-y-5">
      {
        <Text as="h1" size="xl4" bold>
          {parts.map((part) =>
            part.toLowerCase() === highlight.toLowerCase() ? (
              <Text key={part} as="span" size="xl4" color="special">
                {" "}
                {highlight}{" "}
              </Text>
            ) : (
              <React.Fragment key={part}>{part}</React.Fragment>
            )
          )}
        </Text>
      }

      <Text as="h2" size="lg" align="center">
        {subtitle}
      </Text>
    </div>
  )
}

export default SectionHeader
