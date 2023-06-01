import { ReposContextProvider } from "state/repos/ReposContext"
import { DefaultLayout } from "layouts/DefaultLayout"

export default function Home() {
  return (
    <DefaultLayout>
      <ReposContextProvider>
        <span>components...</span>
      </ReposContextProvider>
    </DefaultLayout>
  )
}
