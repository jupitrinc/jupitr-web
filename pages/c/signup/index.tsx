import { SignUp } from "components/company/sign-up/SignUp"
import { AppLayout } from "layouts/AppLayout"
import { CompanyProfileContextProvider } from "state/company_profile/CompanyProfileContext"

export default function CompanySignUp() {
  return (
    <AppLayout>
      <CompanyProfileContextProvider>
        <SignUp />
      </CompanyProfileContextProvider>
    </AppLayout>
  )
}
