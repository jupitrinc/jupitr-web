import { WebsiteLayout } from "layouts/WebsiteLayout"
import { SignUp } from "components/company/sign-up/SignUp"
import { IndustryContextProvider } from "state/industry/IndustryContext"

export default function CompanySignUp() {
  return (
    <WebsiteLayout>
      <IndustryContextProvider>
        <SignUp />
      </IndustryContextProvider>
    </WebsiteLayout>
  )
}
