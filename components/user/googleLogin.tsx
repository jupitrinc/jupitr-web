import React from "react"
import { Button } from "ui-library/button/Button"
import { GoogleIcon } from "ui-library/icon/Icon"

export const GoogleLogin = () => {
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
