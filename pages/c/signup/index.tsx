import { WebsiteAppLayout } from "layouts/WebsiteAppLayout"
import { SignUp } from "components/company/sign-up/SignUp"
import { IndustryContextProvider } from "state/industry/IndustryContext"

export default function CompanySignUp() {
  return (
    <WebsiteAppLayout>
      <IndustryContextProvider>
        <SignUp />
      </IndustryContextProvider>
    </WebsiteAppLayout>
  )
}
