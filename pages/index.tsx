import { WebsiteAppLayout } from "layouts/WebsiteAppLayout"
import { Text } from "ui-library/text/Text"

export default function Home() {
  return (
    <WebsiteAppLayout>
      <div className="text-center">
        <Text as="h1">Website homepage</Text>
      </div>
    </WebsiteAppLayout>
  )
}
