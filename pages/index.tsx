import { WebsiteLayout } from "layouts/WebsiteLayout"
import { SignIn } from "components/user/sign-in/SignIn"
import { useUserState } from "state/user/useUserState"
import { Button } from "ui-library/button/Button"
import { useRouter } from "next/router"
import { AccountTypeEnum } from "state/user/user.types"
import { useCallback } from "react"

export default function Home() {
  const router = useRouter()
  const { user } = useUserState()

  const goToDashboard = useCallback(() => {
    router.push(
      user.account_type === AccountTypeEnum.company ? "/c/jobs" : "/jobs"
    )
  }, [user])

  return (
    <WebsiteLayout>
      {!user.id && <SignIn />}

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
  )
}
