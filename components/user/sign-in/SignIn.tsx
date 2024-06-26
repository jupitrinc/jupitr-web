import React, { useCallback, useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "ui-library/button/Button"
import { Divider } from "ui-library/content/divider/Divider"
import { LightForm } from "ui-library/form/light-form/LightForm"
import { GoogleIcon } from "ui-library/icon/Icon"
import { Text } from "ui-library/text/Text"
import { useUserState } from "state/user/useUserState"
import { useUserAction } from "state/user/useUserAction"
import { useRouter } from "next/router"
import { localStorageHelper } from "../../../helper/localStorageHelper"
import { useNotificationAction } from "state/notification/useNotificationAction"

export const SignIn = () => {
  const router = useRouter()
  const { jobId } = router.query

  const [email, setEmail] = useState("")
  const { loading } = useUserState()
  const { signInWithEmail, signInWithGoogle } = useUserAction()
  const { notify } = useNotificationAction()

  const saveJobId = useCallback(() => {
    if (jobId) {
      localStorageHelper.setItem("jobId", jobId)
    }
  }, [jobId])

  const loginWithEmail = useCallback(
    async (e) => {
      e.preventDefault()
      saveJobId()
      await signInWithEmail(email)
    },
    [email]
  )
  const loginWithGoogle = async () => {
    saveJobId()
    await signInWithGoogle()
  }

  useEffect(() => {
    handleError()
  }, [])

  const handleError = () => {
    if (
      typeof window !== "undefined" &&
      window.location.href.includes("error_code")
    ) {
      notify({
        message: "Email link is invalid or has expired. Sign in again",
        type: "warning",
      })
    }
  }

  return (
    <div className="flex flex-col space-y-6 text-center">
      <div className="mb-5">
        <Text as="h1" size="xl2">
          Sign in <span className="font-thin text-gray-300">/</span> up
        </Text>
      </div>

      <LightForm
        name="otp_sign_in"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        onSubmit={loginWithEmail}
        icon={<ChevronRight />}
        placeholder="Email address"
        loading={loading}
        disabled={loading}
        required={true}
      />

      <div className="grid grid-cols-3 items-baseline gap-1">
        <Divider />
        <Text as="span" size="xs">
          OR
        </Text>
        <Divider />
      </div>

      <Button
        color="standard"
        icon={<GoogleIcon className="inline h-6 w-6" />}
        label="with Google"
        onClick={loginWithGoogle}
        variant="contained"
        disabled={loading}
      />
    </div>
  )
}
