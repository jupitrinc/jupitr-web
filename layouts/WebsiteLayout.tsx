import { Navbar } from "./components/Navbar"
import { usePersistedUser } from "../state/user/usePersistedUser"
import { Footer } from "./components/Footer"

export const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  usePersistedUser()

  return (
    <div className=" my-10">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8 max-w-7xl">
        <header className="space-y-2 ">
          <Navbar />
        </header>
      </div>

      <main className="my-10">{children}</main>

      <Footer />
    </div>
  )
}
