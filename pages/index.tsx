import { DefaultLayout } from "layouts/DefaultLayout"
import { Text } from "ui-library/text/Text"

export default function Home() {
  return (
    <DefaultLayout>
      <div className="text-center">
        <Text as="h1">Website homepage</Text>
      </div>
    </DefaultLayout>
  )
}
