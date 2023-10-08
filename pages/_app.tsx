import "../styles/globals.css"
import type { AppProps } from "next/app"
import { UserContextProvider } from "state/user/UserContextProvider"
import { IndustryContextProvider } from "state/industry/IndustryContext"
import { NotificationContextProvider } from "state/notification/NotificationContext"
import { SkillContextProvider } from "state/skill/SkillContext"
import Notifications from "components/user/notifications/Notifications"
import { TalentJobContextProvider } from "state/talent_job/TalentJobContext"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationContextProvider>
      <UserContextProvider>
        <IndustryContextProvider>
          <SkillContextProvider>
            <TalentJobContextProvider>
              <Component {...pageProps} />
            </TalentJobContextProvider>

            <Notifications />
          </SkillContextProvider>
        </IndustryContextProvider>
      </UserContextProvider>
    </NotificationContextProvider>
  )
}
