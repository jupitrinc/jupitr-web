import React from "react"
import { useUserState } from "state/user/useUserState"
import { AccountTypeEnum } from "state/user/user.types"
import Error from "./components/Error"

const CompanyLayout = ({ children }) => {
  const { user } = useUserState()

  if (user.account_type !== AccountTypeEnum.company) {
    return <Error />
  } else {
    return children
  }
}

export default CompanyLayout
