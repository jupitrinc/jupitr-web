import Link from "next/link"
import { DefaultLayout } from "layouts/DefaultLayout"
import { Button } from "ui-library/button/Button"
import { Text } from "ui-library/text/Text"

export default function Home() {
  return (
    <DefaultLayout>
      <div className="text-center">
        <Text as="h1">Pages</Text>
      </div>

      <div className="flex space-x-3 justify-center">
        <Link href="/jobs">
          <Button label="Jobs" />
        </Link>
        <Link href="/profile">
          <Button label="Profile" />
        </Link>
        <Link href="/login">
          <Button label="Login" />
        </Link>
      </div>
    </DefaultLayout>
  )
}
