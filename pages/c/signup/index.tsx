import { useMemo } from "react"
import { WebsiteLayout } from "layouts/WebsiteLayout"
import { SignUp } from "components/company/sign-up/SignUp"
import { CompanyProfileContextProvider } from "state/company_profile/CompanyProfileContext"
import PageHead from "layouts/components/PageHead"
import { urlHelper } from "helper/urlHelper"

export default function CompanySignUp() {
  const dynamicImage = useMemo(
    () =>
      urlHelper.ogImageUrl({
        domain: urlHelper.domain(),
        company_logo: "https://jupitr.tech/logo.png",
        title: "Find A-player tech talent",
      }),
    []
  )

  return (
    <>
      <PageHead
        title="Post a FREE job - jupitr"
        description="Looking for A-player tech talent?"
        keywords="tech jobs london, AI jobs, devops jobs, frontend developer jobs, backend developer jobs, software engineering jobs, javascript developer, typescript developer, python developer, java developer, machine learning jobs, java developer"
        robots="index, follow"
        image={dynamicImage}
      />
      <WebsiteLayout>
        <CompanyProfileContextProvider>
          <SignUp />
        </CompanyProfileContextProvider>
      </WebsiteLayout>
    </>
  )
}
