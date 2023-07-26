import { ChevronLeft, ChevronRight, MailCheck, X } from "lucide-react"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { Button } from "ui-library/button/Button"
import { Divider } from "ui-library/divider/Divider"
import { LightForm } from "ui-library/form/light-form/LightForm"
import { GoogleIcon } from "ui-library/icon/Icon"
import { Text } from "ui-library/text/Text"
import { useRouter } from "next/navigation"
import { supabaseClientComponent } from "services/_supabase/client"
import { useUserState } from "state/user/useUserState"
import { useUserAction } from "state/user/useUserAction"

export const SignIn = () => {
  const { loading } = useUserState()
  const { signInWithEmail, signInwithGoogleAccount } = useUserAction()

  const [isEmailSent, setIsEmailSent] = useState(false)
  const [email, setEmail] = useState("")

  const loginWithEmail = async (e) => {
    e.preventDefault()
    await signInWithEmail(email)
    toggleNotification()
  }

  const loginWithGoogle = async () => {
    await signInwithGoogleAccount()
  }

  const toggleNotification = () => {
    const sent = isEmailSent
    setIsEmailSent(!sent)
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

      {isEmailSent && (
        <EmailSentMessage toggleNotification={toggleNotification} />
      )}
    </div>
  )
}

export const EmailSentMessage = ({ toggleNotification }) => {
  return (
    <div
      id="alert-5"
      className="flex items-center gap-2 p-4 rounded-lg bg-gray-50 fixed bottom-8"
      role="alert"
    >
      <MailCheck />
      <div className="inline-flex gap-2  text-sm text-gray-800">
        <p>Check out your email for a link to sign in to the app.</p>
      </div>
      <button
        onClick={toggleNotification}
        type="button"
        className="bg-gray-50 text-gray-500 rounded-lg p-1.5 hover:bg-gray-200 inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#alert-5"
        aria-label="Close"
      >
        <X />
      </button>
    </div>
  )
}
