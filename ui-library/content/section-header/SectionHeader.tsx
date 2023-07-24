import { Text } from "ui-library/text/Text"
import { SectionHeaderProps } from "./SectionHeader.types"

export const SectionHeader: React.FC<SectionHeaderProps> = (header) => (
  <div className="grid grid-cols-1">
    <Text as="p" size="lg">
      {header.title}
    </Text>
  </div>
)
