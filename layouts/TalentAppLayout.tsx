import Head from "next/head"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { useUserState } from "state/user/useUserState"
import Error from "./components/Error"
import { AccountTypeEnum } from "state/user/user.types"
import { usePersistedUser } from "helper/hooks/usePersistedUser"
import { TalentProfileContextProvider } from "state/talent_profile/TalentProfileContext"

export const TalentAppLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { user } = useUserState()
  usePersistedUser()

  if (user.account_type === AccountTypeEnum.talent) {
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
          <main className="my-10">
            <TalentProfileContextProvider>
              {children}
            </TalentProfileContextProvider>
          </main>
          <Footer />
        </div>
      </>
    )
  } else {
    return (
      <main className="my-10">
        <Error />
      </main>
    )
  }
}
