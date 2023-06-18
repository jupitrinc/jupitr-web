import Head from "next/head"
import { LayoutProps } from "./Layout.types"
import Link from "next/link"
import { Text } from "ui-library/text/Text"
import { Button } from "ui-library/button/Button"
import { Dropdown } from "ui-library/menu/dropdown/Dropdown"
import { userState } from "state/user/userState"
import { useRouter } from "next/router"
import { userAction } from "state/user/userAction"

export const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>jupitr</title>
        <meta name="description" content="" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-10">
        <header className="space-y-2">
          <Navbar />
        </header>
        <main>
          <div className="mx-auto flex flex-col max-w-2xl my-5 space-y-10">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}

const Navbar = () => {
  const router = useRouter()
  const { user } = userState()
  const { signOut } = userAction()

  if (router.pathname.includes("/login")) {
    return null
  } else if (router.pathname.includes("/c/")) {
    return null
  } else {
    return (
      <div className="flex flex-row space-x-5 justify-between items-baseline">
        <div>
          <Link href="/jobs">
            <Text as="h1" size="xl">
              jupitr
            </Text>
          </Link>
        </div>

        <div className="space-x-5 flex">
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
              { name: "Sign out", onClick: () => signOut() },
            ]}
          />
        </div>
      </div>
    )
  }
}
