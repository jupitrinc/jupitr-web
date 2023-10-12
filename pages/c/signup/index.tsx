import { useMemo } from "react"
import { GetServerSidePropsContext } from "next"
import { WebsiteLayout } from "layouts/WebsiteLayout"
import { SignUp } from "components/company/sign-up/SignUp"
import { CompanyProfileContextProvider } from "state/company_profile/CompanyProfileContext"
import PageHead from "layouts/components/PageHead"
import { urlHelper } from "helper/urlHelper"

export default function CompanySignUp({ domain }) {
  const dynamicImage = useMemo(
    () =>
      urlHelper.ogImageUrl({
        domain: domain,
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

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const protocol =
    context.req.headers.host && context.req.headers.host.includes("localhost")
      ? "http"
      : "https"

  const domain = `${protocol}://${context.req.headers.host}`

  return {
    props: {
      domain: domain,
    },
  }
}
