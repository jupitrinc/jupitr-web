import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { useUserState } from "state/user/useUserState"
import { AccountTypeEnum } from "state/user/user.types"
import { usePersistedUser } from "components/user/sign-in/usePersistedUser"
import PageNotFound from "./components/PageNotFound"
import PageHead from "./components/PageHead"
import { Loading } from "ui-library/content/loading/Loading"

export const CompanyAppLayout = ({ children }) => {
  const { user, loading } = useUserState()
  usePersistedUser()

  if (loading) return <Loading />
  else if (user.id && user.account_type === AccountTypeEnum.company)
    return (
      <>
        <PageHead />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-10">
          <header className="space-y-2">
            <Navbar />
          </header>
          <main className="my-10">{children}</main>
          <Footer />
        </div>
      </>
    )
  else
    return (
      <main className="my-10">
        <PageNotFound />
      </main>
    )
}
