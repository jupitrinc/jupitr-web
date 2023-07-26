import React, { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useUserState } from "state/user/useUserState"
import { Text } from "ui-library/text/Text"
import { Button } from "ui-library/button/Button"
import { Dropdown } from "ui-library/menu/dropdown/Dropdown"
import { useUserAction } from "state/user/useUserAction"
import { AccountTypeEnum } from "state/user/user.types"

export const Navbar = () => {
  const { isLoggedIn, accountType } = useUserState()
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
          <Brand
            link={accountType === AccountTypeEnum.talent ? "/jobs" : "/c/jobs"}
          />
          {accountType === AccountTypeEnum.talent ? (
            <TalentMenu />
          ) : (
            <CompanyMenu />
          )}
        </div>
      )
    } else {
      return (
        <div className="flex flex-row space-x-5 justify-between items-baseline">
          <Brand link="/" />
          <PublicMenu />
        </div>
      )
    }
  }
}

const Brand = ({ link }: { link: string }) => {
  return (
    <Link href={link}>
      <Text as="h1" size="base" bold>
        jupitr
      </Text>
    </Link>
  )
}

const TalentMenu = () => {
  const router = useRouter()
  const { user } = useUserState()
  const { signOut } = useUserAction()

  return (
    <div className="flex gap-5">
      <Link href="/jobs">
        <Button label="Jobs" size="base" variant="text" />
      </Link>

      <Dropdown
        type="avatar"
        image_url={user.avatar_url}
        options={[
          {
            name: "Profile",
            onClick: () => router.push("/profile"),
          },
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

  return (
    <div className="flex gap-5">
      <Link href="/c/jobs">
        <Button label="Jobs" size="base" variant="text" />
      </Link>

      <Dropdown
        type="avatar"
        image_url={user.avatar_url}
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
  return (
    <div className="flex gap-5">
      <Link href="/c/signup">
        <Button label="Post a job" size="base" variant="text" />
      </Link>
      <Link href="/login">
        <Button label="Sign in" size="base" color="special" />
      </Link>
    </div>
  )
}
