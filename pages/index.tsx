import { WebsiteLayout } from "layouts/WebsiteLayout"
import { Text } from "ui-library/text/Text"

export default function Home() {
  return (
    <WebsiteLayout>
      <div className="text-center">
        <Text as="h1">Website homepage</Text>
      </div>
    </WebsiteLayout>
  )
}
