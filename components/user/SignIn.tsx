import { ChevronLeft, ChevronRight, Loader } from "lucide-react"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { Button } from "ui-library/button/Button"
import { Divider } from "ui-library/divider/Divider"
import { LightForm } from "ui-library/form/light-form/LightForm"
import { GoogleIcon } from "ui-library/icon/Icon"
import { Text } from "ui-library/text/Text"
import useAuthService from "../../services/auth/useAuthService"
import { useRouter } from "next/navigation"
import { supabaseClientComponent } from "services/_supabase/client"

export const SignIn = () => {
  const [isEmailSent, setIsEmailSent] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (document.cookie == "") {
      setIsEmailSent(false)
    } else {
      setIsEmailSent(true)
    }
  }, [])

  useEffect(() => {
    const {
      data: { subscription },
    } = supabaseClientComponent.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") router.replace("/profile")
    })

    return () => subscription.unsubscribe()
  }, [supabaseClientComponent])

  return !isEmailSent ? <SignInForm /> : <EmailSentMessage />
}

export const SignInForm = () => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const { signInWithOtp } = useAuthService()
  const router = useRouter()

  const loginWithEmail = async (e) => {
    e.preventDefault()
    setLoading(true)
    await signInWithOtp(email)
    setLoading(false)
    router.refresh()
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
        onClick={() => {
          return
        }}
        size="lg"
        variant="contained"
      />
    </div>
  )
}

export const EmailSentMessage = () => {
  return (
    <div className="max-w-sm mx-auto flex flex-col space-y-10 text-center w-full">
      <div className="mt-20">
        <Text as="h1" size="xl">
          Please, check out your email for the sign in link.
        </Text>
      </div>
    </div>
  )
}
