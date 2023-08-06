import React from "react"
import { Text } from "ui-library/text/Text"

const Greetings = ({ name }: { name: string }) => (
  <Text as="span" size="lg">
    hi <span className="font-medium">{`${name ? name : "there"}`}</span>
    <span role="img" aria-label="waving hand">
      {" "}
      👋
    </span>
  </Text>
)

export default Greetings
