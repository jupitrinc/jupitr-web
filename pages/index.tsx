import { ReposContextProvider } from "state/repos/ReposContext"
import { DefaultLayout } from "layouts/DefaultLayout"

export default function Home() {
  return (
    <DefaultLayout>
      <ReposContextProvider>
        <span>Loading...</span>
      </ReposContextProvider>
    </DefaultLayout>
  )
}
