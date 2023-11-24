import { useMemo } from "react"
import { GetServerSidePropsContext } from "next"
import { WebsiteLayout } from "layouts/WebsiteLayout"
import { urlHelper } from "helper/urlHelper"
import PageHead from "layouts/components/PageHead"
import Sections from "components/_content/company/Sections"

export default function Company({ domain }) {
  const dynamicImage = useMemo(
    () =>
      urlHelper.ogImageUrl({
        domain: domain,
        company_logo: "https://jupitr.tech/logo.png",
        title: "Looking for A-player tech talent?",
      }),
    []
  )

  return (
    <>
      <PageHead
        title="Post a job - jupitr"
        description="Looking for A-player tech talent?"
        keywords="tech jobs london, AI jobs, devops jobs, frontend developer jobs, backend developer jobs, software engineering jobs, javascript developer, typescript developer, python developer, java developer, machine learning jobs, java developer"
        robots="index, follow"
        image={dynamicImage}
      />

      <WebsiteLayout>
        <Sections />
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
