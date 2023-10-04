import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import PageHead from "./components/PageHead"
import { usePersistedUser } from "./auth/usePersistedUser"

export const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  usePersistedUser()

  return (
    <>
      <PageHead />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-10">
        <header className="space-y-2">
          <Navbar />
        </header>
        <main className="my-10">{children}</main>
        <Footer />
      </div>
    </>
  )
}
