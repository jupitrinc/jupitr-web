import { WebsiteLayout } from "layouts/WebsiteLayout"
import { SignUp } from "components/company/sign-up/SignUp"
import { CompanyProfileContextProvider } from "state/company_profile/CompanyProfileContext"

export default function CompanySignUp() {
  return (
    <WebsiteLayout>
      <CompanyProfileContextProvider>
        <SignUp />
      </CompanyProfileContextProvider>
    </WebsiteLayout>
  )
}
