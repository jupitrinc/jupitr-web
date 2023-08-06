import React from "react"
import { Text } from "ui-library/text/Text"

const Message = ({ children }) => (
  <div>
    <div className="inline-flex bg-gray-100 py-1 px-3 rounded-lg">
      <div className="flex flex-row gap-3 justify-start items-center">
        <Text as="span" size="lg">
          {children}
        </Text>
      </div>
    </div>
  </div>
)

export default Message
