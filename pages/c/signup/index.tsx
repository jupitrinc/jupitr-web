import { SignUp } from "components/company/sign-up/SignUp"
import { AppLayout } from "layouts/AppLayout"
import { CompanyProfileContextProvider } from "state/company_profile/CompanyProfileContext"
import { IndustryContextProvider } from "state/industry/IndustryContext"

export default function CompanySignUp() {
  return (
    <AppLayout>
      <CompanyProfileContextProvider>
        <IndustryContextProvider>
          <SignUp />
        </IndustryContextProvider>
      </CompanyProfileContextProvider>
    </AppLayout>
  )
}
