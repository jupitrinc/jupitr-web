import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useUserState } from "state/user/useUserState"
import { Text } from "ui-library/text/Text"
import { Button } from "ui-library/button/Button"
import { Dropdown } from "ui-library/menu/dropdown/Dropdown"
import { useUserAction } from "state/user/useUserAction"
import { AccountTypeEnum } from "state/user/user.types"
import { urlHelper } from "helper/urlHelper"
import Feedback from "components/user/feedback/Feedback"

export const Navbar = () => {
  const router = useRouter()
  const { isLoggedIn, accountType } = useUserState()

  if (
    router.pathname.includes("/c/signup") ||
    router.pathname.includes("/login")
  ) {
    return null
  } else {
    if (isLoggedIn) {
      return (
        <div className="fixed top-0 py-3 z-20 max-w-7xl px-4 sm:px-6 lg:px-8 w-full bg-gray-100">
          <nav className="flex flex-row space-x-5 justify-between items-center">
            <div className="flex flex-row gap-3 items-center">
              <Brand
                link={
                  accountType === AccountTypeEnum.talent ? "/jobs" : "/c/jobs"
                }
              />
              <Feedback />
            </div>

            {accountType === AccountTypeEnum.talent ? (
              <TalentMenu />
            ) : (
              <CompanyMenu />
            )}
          </nav>
        </div>
      )
    } else {
      return (
        <div className="fixed top-0 py-2 z-20 px-4 sm:px-20 w-full backdrop-blur-sm bg-gray-200/95">
          <nav className="flex flex-row space-x-5 justify-between items-center">
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
  const router = useRouter()
  const { user } = useUserState()
  const { signOut } = useUserAction()
  const { imageUrl } = urlHelper

  return (
    <div className="flex gap-2 items-center">
      <Link href="/jobs">
        <Button label="Jobs" size="base" variant="text" />
      </Link>

      <Link href={`/profile/${user.username}`}>
        <Button label="Profile" size="base" variant="text" />
      </Link>

      <Dropdown
        type="avatar"
        image_url={imageUrl(user.avatar_url)}
        options={[
          { name: "Edit profile", onClick: () => router.push("/profile") },
          { name: "Sign out", onClick: signOut },
        ]}
      />
    </div>
  )
}

const CompanyMenu = () => {
  const router = useRouter()
  const { user } = useUserState()
  const { signOut } = useUserAction()
  const { imageUrl } = urlHelper

  return (
    <div className="flex gap-5 items-center">
      <Link href="/c/jobs">
        <Button label="Jobs" size="base" variant="text" />
      </Link>

      <Dropdown
        type="avatar"
        image_url={imageUrl(user.avatar_url)}
        options={[
          {
            name: "Profile",
            onClick: () => router.push("/c/profile"),
          },
          { name: "Sign out", onClick: signOut },
        ]}
      />
    </div>
  )
}

const PublicMenu = () => {
  const router = useRouter()
  const { jobId } = router.query

  return (
    <div className="flex gap-5 items-center">
      {jobId ? (
        <Link href="/login">
          <Button label="Sign in" />
        </Link>
      ) : (
        <div className="flex flex-row gap-2 items-center">
          <Link href="/c/signup">
            <Button label="Post a job" variant="text" />
          </Link>

          <Link href="/login">
            <Button label="Sign in" color="special" />
          </Link>
        </div>
      )}
    </div>
  )
}
