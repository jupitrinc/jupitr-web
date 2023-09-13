import Notifications from "components/user/notifications/Notifications"
import "../styles/globals.css"
import type { AppProps } from "next/app"
import { IndustryContextProvider } from "state/industry/IndustryContext"
import { NotificationContextProvider } from "state/notification/NotificationContext"
import { SkillContextProvider } from "state/skill/SkillContext"
import { UserContextProvider } from "state/user/UserContextProvider"

export default function App({ Component, pageProps }: AppProps) {
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
