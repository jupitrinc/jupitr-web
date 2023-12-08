import { useCallback, useMemo } from "react"
import { WebsiteLayout } from "layouts/WebsiteLayout"
import { useUserState } from "state/user/useUserState"
import { Button } from "ui-library/button/Button"
import { useRouter } from "next/router"
import { urlHelper } from "helper/urlHelper"
import { GetServerSidePropsContext } from "next"
import PageHead from "layouts/components/PageHead"
import Sections from "components/_content/home/Sections"

export default function Home({ domain }) {
  const router = useRouter()
  const { user } = useUserState()

  const goToDashboard = useCallback(() => {
    router.push("/profile")
  }, [user])

  const dynamicImage = useMemo(
    () =>
      urlHelper.ogImageUrl({
        domain: domain,
        company_logo: "https://jupitr.tech/logo.png",
        title: "Get more job interviews",
      }),
    []
  )

  return (
    <>
      <PageHead
        title="jupitr"
        description="Get more job interviews with jupitr"
        keywords="tech jobs london, AI jobs, devops jobs, frontend developer jobs, backend developer jobs, software engineering jobs, javascript developer, typescript developer, python developer, java developer, machine learning jobs, java developer"
        robots="index, follow"
        image={dynamicImage}
      />

      <WebsiteLayout>
        {!user.id && <Sections />}

        {user.id && (
          <div className="m-auto mt-24 flex max-w-sm justify-center text-center">
            <Button
              label="Profile"
              size="xl"
              variant="outlined"
              onClick={goToDashboard}
              full_width
              arrow
            />
          </div>
        )}
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
