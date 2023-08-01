import CompanyLayout from "layouts/CompanyLayout"
import { SignUp } from "components/company/sign-up/SignUp"
import { IndustryContextProvider } from "state/industry/IndustryContext"

export default function CompanySignUp() {
  return (
    <CompanyLayout>
      <IndustryContextProvider>
        <SignUp />
      </IndustryContextProvider>
    </CompanyLayout>
  )
}
