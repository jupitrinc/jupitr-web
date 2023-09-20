import React, { useCallback, useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "ui-library/button/Button"
import { Divider } from "ui-library/content/divider/Divider"
import { LightForm } from "ui-library/form/light-form/LightForm"
import { GoogleIcon } from "ui-library/icon/Icon"
import { Text } from "ui-library/text/Text"
import { useUserState } from "state/user/useUserState"
import { useUserAction } from "state/user/useUserAction"
import { useNotificationAction } from "state/notification/useNotificationAction"
import { useRouter } from "next/router"
import { localStorageHelper } from "../../../helper/localStorageHelper"

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const { loading } = useUserState()
  const { signInWithEmail, signInWithGoogle } = useUserAction()
  const { notify } = useNotificationAction()
  const router = useRouter()
  const { jobId } = router.query

  useEffect(() => {
    if (window.location.href.includes("error_code")) {
      notify({
        message: "Email link is invalid or has expired. Sign in again.",
        type: "warning",
      })
    }
  }, [])
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
  const loginWithGoogle = async (e) => {
    e.preventDefault()
    saveJobId()
    await signInWithGoogle()
  }
  return (
    <div className="max-w-sm mx-auto w-full flex flex-col space-y-6 text-center">
      <Text as="h1" size="xl2">
        Sign in
      </Text>

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

      <div className="grid grid-cols-3 gap-1 items-baseline">
        <Divider />
        <Text as="span" size="xs">
          OR
        </Text>
        <Divider />
      </div>

      <Button
        color="standard"
        icon={<GoogleIcon className="inline w-6 h-6" />}
        label="with Google"
        onClick={loginWithGoogle}
        variant="contained"
        disabled={loading}
      />
    </div>
  )
}
