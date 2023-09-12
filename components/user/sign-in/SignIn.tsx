import React, { useCallback, useEffect, useMemo, useState } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "ui-library/button/Button"
import { Divider } from "ui-library/content/divider/Divider"
import { LightForm } from "ui-library/form/light-form/LightForm"
import { GoogleIcon } from "ui-library/icon/Icon"
import { Text } from "ui-library/text/Text"
import { Toast } from "ui-library/toast/Toast"
import { useNotification } from "helper/hooks/useNotification"
import { useUserState } from "state/user/useUserState"
import { useUserAction } from "state/user/useUserAction"
import { stringHelper } from "helper/stringHelper"
import { useRouter } from "next/router"
import { localStorageHelper } from "../../../helper/localStorageHelper"

export const SignIn = () => {
  const { isEmpty } = stringHelper
  const [email, setEmail] = useState("")
  const [jobId, setJobId] = useState("")
  const { loading, error } = useUserState()
  const { signInWithEmail, signInWithGoogle } = useUserAction()
  const { notification, showNotification, hideNotification } = useNotification(
    !isEmpty(error)
  )
  const router = useRouter()

  const {
    notification: otpError,
    showNotification: showOtpError,
    hideNotification: hideOtpError,
  } = useNotification()

  useEffect(() => {
    if (window.location.href.includes("error_code")) {
      showOtpError()
    }
  }, [])
  useEffect(() => {
    if (router?.query?.jobId) {
      setJobId(router?.query?.jobId as string)
    }
  }, [router.query.jobId])

  const onHide = () => {
    hideNotification()
  }

  const loginWithEmail = useCallback(
    async (e) => {
      e.preventDefault()
      if (jobId) {
        localStorageHelper.setItem("jobId", jobId)
      }
      await signInWithEmail(email)
      showNotification()
    },
    [email]
  )
  const loginWithGoogle = async (e) => {
    e.preventDefault()
    if (jobId) {
      localStorageHelper.setItem("jobId", jobId)
    }
    await signInWithGoogle()
  }
  const errorMessage = useMemo(() => {
    if (!isEmpty(error)) {
      return error
    } else {
      return "Sign in using the link sent to your inbox"
    }
  }, [error])

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

      <Toast show={notification} onHide={onHide} label={errorMessage} />
      <Toast
        show={otpError}
        onHide={hideOtpError}
        label={"Email link is invalid or has expired. Sign in again."}
      />
    </div>
  )
}
