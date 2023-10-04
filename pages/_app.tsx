import "../styles/globals.css"
import type { AppProps } from "next/app"
import { UserContextProvider } from "state/user/UserContextProvider"
import { IndustryContextProvider } from "state/industry/IndustryContext"
import { NotificationContextProvider } from "state/notification/NotificationContext"
import { SkillContextProvider } from "state/skill/SkillContext"
import Notifications from "components/user/notifications/Notifications"
import { supabaseClientComponent } from "../services/_supabase/client"
import { useEffect } from "react"
import { localStorageHelper } from "../helper/localStorageHelper"
import { cookieHelper } from "../helper/cookieHelper"
import { usePathname } from "next/navigation"
import { urlHelper } from "../helper/urlHelper"

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname()
  const { isPublicJobRoute, isPublicUrl } = urlHelper
  const getSession = async () => {
    // run only on protected routes
    if (
      !(isPublicJobRoute(pathname as string) || isPublicUrl(pathname as string))
    ) {
      const {
        error,
        data: { user },
      } = await supabaseClientComponent.auth.getUser()
      // if no user is found or returns error redirect back to login
      if (error || !user) {
        localStorageHelper.clear()
        cookieHelper.deleteAllCookies()
        location.replace("/")
      }
    }
  }

  useEffect(() => {
    if (pathname) {
      getSession()
    }
  }, [pathname])
  return (
    <NotificationContextProvider>
      <UserContextProvider>
        <IndustryContextProvider>
          <SkillContextProvider>
            <Component {...pageProps} />

            <Notifications />
          </SkillContextProvider>
        </IndustryContextProvider>
      </UserContextProvider>
    </NotificationContextProvider>
  )
}
