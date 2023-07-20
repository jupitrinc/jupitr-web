import { AppLayout } from "layouts/AppLayout"
import { Text } from "ui-library/text/Text"

export default function Home() {
  return (
    <AppLayout>
      <div className="text-center">
        <Text as="h1">Website homepage</Text>
      </div>
    </AppLayout>
  )
}
