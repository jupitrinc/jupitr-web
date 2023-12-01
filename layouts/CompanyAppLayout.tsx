import { Navbar } from "./components/Navbar"
import { useUserState } from "state/user/useUserState"
import { AccountTypeEnum } from "state/user/user.types"
import PageNotFound from "./components/PageNotFound"
import PageHead from "./components/PageHead"
import { Loading } from "ui-library/content/loading/Loading"
import { usePersistedUser } from "../state/user/usePersistedUser"

export const CompanyAppLayout = ({ children }) => {
  const { user, loading } = useUserState()
  usePersistedUser()

  if (loading) return <Loading showLabel />
  else if (user.id && user.account_type === AccountTypeEnum.company)
    return (
      <>
        <PageHead />
        <header className="flex justify-center">
          <Navbar />
        </header>
        <div className="mx-auto my-10 mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
          <main className="my-10">{children}</main>
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
