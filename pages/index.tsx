// import { ReposContextProvider } from "state/user/UserContext"
import { UserContextProvider } from "state/user/UserContext"
import { DefaultLayout } from "layouts/DefaultLayout"
import Profile from "components/talent/profile/Profile"

export default function Home() {
  return (
    <DefaultLayout>
      <UserContextProvider>
        <h1 className="text-center">Home...</h1>
        <Profile />
      </UserContextProvider>
    </DefaultLayout>
  )
}
