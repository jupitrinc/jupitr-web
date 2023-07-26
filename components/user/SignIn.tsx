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

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const { signInWithOtp, signInWithGoogle } = useAuthService()
  const router = useRouter()

  const { notification, showNotification, hideNotification } = useNotification()

  useEffect(() => {
    if (document.cookie == "") {
      hideNotification()
    } else {
      showNotification()
    }
  }, [])

  // hook to check if there is a session created
  // social auth sessions like google are created client side,
  // thats why we need to subscribe to this types of events.
  useEffect(() => {
    const {
      data: { subscription },
    } = supabaseClientComponent.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") router.replace("/profile")
    })

    return () => subscription.unsubscribe()
  }, [supabaseClientComponent])

  const loginWithEmail = async (e) => {
    e.preventDefault()
    await signInWithOtp(email)
  }

  const loginWithGoogle = async () => {
    await signInWithGoogle()
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
