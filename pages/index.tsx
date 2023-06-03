import { ReposContextProvider } from "state/repos/ReposContext"
import { DefaultLayout } from "layouts/DefaultLayout"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Button } from "ui-library/button/Button"

export default function Home() {
  return (
    <DefaultLayout>
      <ReposContextProvider>
        <span>Loading...</span>
      </ReposContextProvider>
    </DefaultLayout>
  )
}
