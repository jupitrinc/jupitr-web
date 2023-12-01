import { Check } from "lucide-react"
import { Text } from "ui-library/text/Text"

const SentMessage = () => (
  <Text as="span" size="base" align="center">
    <span className="mt-2 flex flex-row items-center justify-center gap-2">
      <Check className="h-6 w-6" />
      <span>Feedback received</span>
    </span>
  </Text>
)

export default SentMessage
