import { ReposContextProvider } from "state/repos/ReposContext"
import { DefaultLayout } from "layouts/DefaultLayout"
import { Avatar } from "ui-library/avatar/avatar/Avatar"

export default function Home() {
  return (
    <DefaultLayout>
      <ReposContextProvider>
        <Avatar
          image_url="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
          size={20}
        />

        <span className=" overflow-hidden">hey</span>
      </ReposContextProvider>
    </DefaultLayout>
  )
}
