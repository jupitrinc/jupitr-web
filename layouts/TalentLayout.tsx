import React from "react"
import { useUserState } from "state/user/useUserState"
import { AccountTypeEnum } from "state/user/user.types"
import Error from "./components/Error"

const TalentLayout = ({ children }) => {
  const { user } = useUserState()

  if (user.account_type !== AccountTypeEnum.talent) {
    return <Error />
  } else {
    return <>{children}</>
  }
}

export default TalentLayout
