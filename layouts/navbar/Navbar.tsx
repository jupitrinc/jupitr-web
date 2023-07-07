import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useUserState } from "state/user/useUserState"
import { Text } from "ui-library/text/Text"
import { Button } from "ui-library/button/Button"
import { Dropdown } from "ui-library/menu/dropdown/Dropdown"
import { useUserAction } from "state/user/useUserAction"

export const Navbar = () => {
  const { isLoggedIn, user } = useUserState()
  const { signOut } = useUserAction()
  const router = useRouter()

  if (
    router.pathname.includes("/login") ||
    router.pathname.includes("/c/signup")
  ) {
    return null
  } else {
    if (isLoggedIn) {
      return (
        <div className="flex flex-row space-x-5 justify-between items-baseline">
          <div>
            <Link href="/jobs">
              <Text as="h1" size="xl">
                jupitr
              </Text>
            </Link>
          </div>

          <div className="flex gap-5">
            <Link href="/jobs">
              <Button label="Jobs" size="base" variant="text" />
            </Link>

            <Dropdown
              type="avatar"
              image_url={user.avatar}
              items={[
                {
                  name: "Profile",
                  onClick: () => router.push("/profile"),
                },
                {
                  name: "Account settings",
                  onClick: () => router.push("/account/settings"),
                },
                { name: "Sign out", onClick: signOut },
              ]}
            />
          </div>
        </div>
      )
    } else {
      return (
        <div className="flex flex-row space-x-5 justify-between items-baseline">
          <div>
            <Link href="/">
              <Text as="h1" size="xl">
                jupitr
              </Text>
            </Link>
          </div>
          <div className="flex gap-5">
            <Link href="/c/signup">
              <Button label="Post a job" size="base" variant="text" />
            </Link>
            <Link href="/login">
              <Button label="Sign in" size="base" color="special" />
            </Link>
          </div>
        </div>
      )
    }
  }
}
