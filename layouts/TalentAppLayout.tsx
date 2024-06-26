import { useRouter } from "next/router"
import { Navbar } from "./components/Navbar"
import { Loading } from "ui-library/content/loading/Loading"
import { useUserState } from "state/user/useUserState"
import { AccountTypeEnum } from "state/user/user.types"
import PageNotFound from "./components/PageNotFound"
import PageHead from "./components/PageHead"
import { usePersistedUser } from "../state/user/usePersistedUser"

export const TalentAppLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { user, isLoggedIn } = useUserState()
  usePersistedUser()

  const router = useRouter()
  const { userName } = router.query

  if (user.account_type === AccountTypeEnum.talent || userName) {
    return (
      <>
        {!userName && <PageHead title="Edit profile" />}
        <header>
          <Navbar />
        </header>

        <div className={`my-10 px-4 sm:px-6 lg:px-8 ${isLoggedIn && "mt-24"}`}>
          <main className="my-10">{children}</main>
        </div>
      </>
    )
  } else {
    return (
      <main className="my-10">{!user.id ? <Loading /> : <PageNotFound />}</main>
    )
  }
}
