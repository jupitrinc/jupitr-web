import Link from "next/link"
import { DefaultLayout } from "layouts/DefaultLayout"
import { Button } from "ui-library/button/Button"
import { Text } from "ui-library/text/Text"
import { useUserState } from "state/user/userState"

export default function Home() {
  const { user, loading, error } = useUserState()

  return (
    <DefaultLayout>
      <div className="text-center">
        <Text as="h1">Website homepage</Text>
      </div>

      <div className="flex space-x-3 justify-center">
        <Link href="/jobs">
          <Button label="Jobs" size="xl" arrow />
        </Link>
      </div>
    </DefaultLayout>
  )
}
