import "../styles/globals.css"
import type { AppProps } from "next/app"
import { IndustryContextProvider } from "state/industry/IndustryContext"
import { SkillContextProvider } from "state/skill/SkillContext"
import { UserContextProvider } from "state/user/UserContextProvider"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <IndustryContextProvider>
        <SkillContextProvider>
          <Component {...pageProps} />
        </SkillContextProvider>
      </IndustryContextProvider>
    </UserContextProvider>
  )
}
