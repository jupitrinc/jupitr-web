import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { Button } from "ui-library/button/Button"
import { Divider } from "ui-library/content/divider/Divider"
import { LightForm } from "ui-library/form/light-form/LightForm"
import { GoogleIcon } from "ui-library/icon/Icon"
import { Text } from "ui-library/text/Text"
import { useRouter } from "next/navigation"
import { supabaseClientComponent } from "services/_supabase/client"
import { Toast } from "ui-library/toast/Toast"
import { useNotification } from "helper/hooks/useNotification"
import useAuthService from "services/auth/useAuthService"
import { useUserState } from "state/user/useUserState"
import { useUserAction } from "state/user/useUserAction"

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const { loading } = useUserState()
  const { signInWithEmail, signInwithGoogleAccount } = useUserAction()
  const { notification, showNotification, hideNotification } = useNotification()

  const loginWithEmail = async (e) => {
    e.preventDefault()
    await signInWithEmail(email)
    showNotification()
  }

  const loginWithGoogle = async () => {
    await signInwithGoogleAccount()
  }

  return (
    <div className="max-w-sm mx-auto flex flex-col space-y-10 text-center w-full">
      <div className="mb-20">
        <Link href="/">
          <Button variant="text" icon={<ChevronLeft />} label="Back" />
        </Link>
      </div>

      <Text as="h1" size="xl2">
        Sign in
      </Text>

      <LightForm
        name="otp_sign_in"
        type="email"
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        onSubmit={(e) => loginWithEmail(e)}
        icon={<ChevronRight />}
        placeHolder="Email address"
        loading={loading}
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
        size="lg"
        variant="contained"
      />

      <Toast
        onHide={hideNotification}
        show={notification}
        label="Log in using the One Time Password (OTP) sent to your inbox."
      />
    </div>
  )
}
