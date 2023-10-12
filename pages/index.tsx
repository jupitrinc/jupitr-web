import { useCallback, useMemo } from "react"
import { WebsiteLayout } from "layouts/WebsiteLayout"
import { SignIn } from "components/user/sign-in/SignIn"
import { useUserState } from "state/user/useUserState"
import { Button } from "ui-library/button/Button"
import { useRouter } from "next/router"
import { AccountTypeEnum } from "state/user/user.types"
import { urlHelper } from "helper/urlHelper"
import PageHead from "layouts/components/PageHead"
import { Footer } from "layouts/components/Footer"

import Intro from "components/_content/home/Intro"
import { Card } from "ui-library/content/card/Card"

export default function Home() {
  const router = useRouter()
  const { user } = useUserState()

  const goToDashboard = useCallback(() => {
    router.push(
      user.account_type === AccountTypeEnum.company ? "/c/jobs" : "/jobs"
    )
  }, [user])

  const dynamicImage = useMemo(
    () =>
      urlHelper.ogImageUrl({
        domain: urlHelper.domain(),
        company_logo: "https://jupitr.tech/logo.png",
        title: "Join A-player tech teams",
      }),
    []
  )

  return (
    <>
      <PageHead
        title="Join A-player tech teams - jupitr"
        description="Looking for a tech job? Join A-player teams"
        keywords="tech jobs london, AI jobs, devops jobs, frontend developer jobs, backend developer jobs, software engineering jobs, javascript developer, typescript developer, python developer, java developer, machine learning jobs, java developer"
        robots="index, follow"
        image={dynamicImage}
      />

      <WebsiteLayout>
        {!user.id && (
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="basis-1/3">
              <Card type="section">
                <SignIn />
                <Footer />
              </Card>
            </div>

            <div className="basis-2/3 text-center">
              <Intro />
            </div>
          </div>
        )}

        {user.id && (
          <div className="flex max-w-sm justify-center m-auto text-center">
            <Button
              label="Jobs"
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
