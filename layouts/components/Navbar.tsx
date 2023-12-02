import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useUserState } from "state/user/useUserState"
import { Text } from "ui-library/text/Text"
import { Button } from "ui-library/button/Button"
import { Dropdown } from "ui-library/menu/dropdown/Dropdown"
import { useUserAction } from "state/user/useUserAction"
import { urlHelper } from "helper/urlHelper"
import Feedback from "components/user/feedback/Feedback"

export const Navbar = () => {
  const router = useRouter()
  const { isLoggedIn } = useUserState()

  if (router.pathname.includes("/login")) {
    return null
  } else {
    if (isLoggedIn) {
      return (
        <div className="fixed top-0 z-20 w-full max-w-7xl bg-gray-100 px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex flex-row items-center justify-between space-x-5">
            <div className="flex flex-row items-center gap-3">
              <Brand link="/profile" />
              <Feedback />
            </div>

            <TalentMenu />
          </nav>
        </div>
      )
    } else {
      return (
        <div className="fixed top-0 z-20 w-full max-w-7xl bg-gray-100 px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex flex-row items-center justify-between space-x-5">
            <Brand link="/" />
            <PublicMenu />
          </nav>
        </div>
      )
    }
  }
}

const Brand = ({ link }: { link: string }) => {
  return (
    <Link href={link}>
      <Text as="span" size="lg" bold brand>
        jupitr
      </Text>
    </Link>
  )
}

const TalentMenu = () => {
  const { user } = useUserState()
  const { signOut } = useUserAction()
  const { imageUrl } = urlHelper

  return (
    <div className="flex items-center gap-2">
      <Link href={`/profile/${user.username}`}>
        <Button label="Profile" size="base" variant="text" />
      </Link>

      <Dropdown
        type="avatar"
        image_url={imageUrl(user.avatar_url)}
        options={[{ name: "Sign out", onClick: signOut }]}
      />
    </div>
  )
}

const PublicMenu = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-row items-center gap-2">
        <Link href="/login">
          <Button label="Sign in" color="special" />
        </Link>
      </div>
    </div>
  )
}
