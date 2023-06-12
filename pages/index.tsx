// import { ReposContextProvider } from "state/user/UserContext"
import { DefaultLayout } from "layouts/DefaultLayout"
import { ProfileOnboarding } from "components/talent/profile/profileOnboarding"

export default function Home() {
  return (
    <DefaultLayout>
      {/* <ReposContextProvider> */}
      <h1 className="text-center">Home...</h1>
      <ProfileOnboarding />
      {/* </ReposContextProvider> */}
    </DefaultLayout>
  )
}
