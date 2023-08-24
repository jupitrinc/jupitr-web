import React, { useCallback, useMemo, useState } from "react"
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
import { CookieEnum, cookieHelper } from "helper/cookieHelper"

export const SignIn = () => {
  const { isEmpty } = stringHelper
  const { deleteCookie } = cookieHelper
  const [email, setEmail] = useState("")
  const { loading, error } = useUserState()
  const { signInWithEmail, signInWithGoogle } = useUserAction()
  const { notification, showNotification, hideNotification } = useNotification(
    !isEmpty(error) || Boolean(cookieHelper.getCookie(CookieEnum.errorOTP))
  )

  const onHide = () => {
    deleteCookie(CookieEnum.errorOTP)
    hideNotification()
  }

  const loginWithEmail = useCallback(
    async (e) => {
      e.preventDefault()
      await signInWithEmail(email)
      showNotification()
    },
    [email]
  )

  const errorMessage = useMemo(() => {
    if (!isEmpty(error)) {
      return error
    } else if (Boolean(cookieHelper.getCookie(CookieEnum.errorOTP))) {
      return "Your one-time-password (OTP) has expired. Sign in again"
    } else {
      return "Sign in using the one-time-password (OTP) sent to your inbox"
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
        onClick={signInWithGoogle}
        variant="contained"
        disabled={loading}
      />

      <Toast show={notification} onHide={onHide} label={errorMessage} />
    </div>
  )
}
