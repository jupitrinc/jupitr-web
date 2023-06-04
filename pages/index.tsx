import { ReposContextProvider } from "state/repos/ReposContext"
import { DefaultLayout } from "layouts/DefaultLayout"

export default function Home() {
  return (
    <DefaultLayout>
      <ReposContextProvider>
        <h1 className="text-center">Home...</h1>
      </ReposContextProvider>
    </DefaultLayout>
  )
}
