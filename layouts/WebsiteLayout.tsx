import { Navbar } from "./components/Navbar"
import { usePersistedUser } from "../state/user/usePersistedUser"
import { Footer } from "./components/Footer"

export const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  usePersistedUser()

  return (
    <>
      <header className="flex justify-center">
        <Navbar />
      </header>
      <div className="mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <main className="my-10">{children}</main>
        <Footer />
      </div>
    </>
  )
}
