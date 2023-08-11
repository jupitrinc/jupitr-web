import { Check } from "lucide-react"
import { Text } from "ui-library/text/Text"

const SentMessage = () => (
  <Text as="span" size="base" align="center">
    <span className="flex flex-row justify-center items-center gap-2 mt-2">
      <Check className="h-6 w-6" />
      <span>Feedback received</span>
    </span>
  </Text>
)

export default SentMessage
