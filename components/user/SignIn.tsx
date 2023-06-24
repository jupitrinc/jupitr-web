import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"
import { Button } from "ui-library/button/Button"
import { Divider } from "ui-library/divider/Divider"
import { LightForm } from "ui-library/form/light-form/LightForm"
import { GoogleIcon } from "ui-library/icon/Icon"
import { Text } from "ui-library/text/Text"
import useAuthService from "../../services/auth/useAuthService"
import { useRouter } from "next/navigation"

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const { signInWithOtp } = useAuthService()
  const router = useRouter()

  const loginWithEmail = async (e) => {
    e.preventDefault()
    await signInWithOtp(email)
    router.refresh()
  }

  return (
    <div className="max-w-sm mx-auto flex flex-col space-y-5 text-center w-full">
      <div className="mb-20">
        <Link href="/">
          <Button variant="text" icon={<ChevronLeft />} label="Back" />
        </Link>
      </div>

      <Text as="h1" size="xl">
        Sign in
      </Text>

      {
        <LightForm
          type="email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          onSubmit={(e) => loginWithEmail(e)}
          icon={<ChevronRight />}
          placeHolder="Email address"
        />
      }

      <div className="grid grid-cols-3 gap-1 items-baseline">
        <Divider />
        <Text as="span" size="xs">
          OR
        </Text>
        <Divider />
      </div>

      <Button
        color="important"
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
