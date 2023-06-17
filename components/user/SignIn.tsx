import React, { useState } from "react"
import { Button } from "ui-library/button/Button"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { GoogleIcon } from "ui-library/icon/Icon"

export const SignIn = () => {
  return (
    <div className="flex flex-col space-y-5 divide-y-2">
      <EmailOTP />
      <Google />
    </div>
  )
}

const EmailOTP = () => {
  const [email, setEmail] = useState("")
  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-2">
      <div className="col-span-2">
        <TextInput
          label="Enter your email address to log in"
          type="email"
          value={email}
          placeholder="emai@address.com"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </div>
      <div className="flex items-end">
        <Button
          color="important"
          label="Log in"
          onClick={() => {
            return
          }}
          size="xl"
        />
      </div>
    </div>
  )
}

const Google = () => {
  return (
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
  )
}
