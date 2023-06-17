import React from "react"
import { Button } from "ui-library/button/Button"
import { TextInput } from "ui-library/form/text-input/TextInput"

export const Settings = () => {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-1 gap-2">
        <div className="col-span-2">
          <TextInput
            label="Email address"
            type="email"
            value=""
            onChange={() => {
              return
            }}
          />
        </div>
        <div className="flex items-end">
          <Button
            color="important"
            label="Update email address"
            onClick={() => {
              return
            }}
            size="base"
          />
        </div>
      </div>
      <Button
        color="dangerous"
        label="Delete account"
        onClick={() => {
          return
        }}
        size="base"
      />
    </>
  )
}
