import { LocalStorageHelper } from "helper/localStorageHelper"
import { useEffect } from "react"
import { useUserAction } from "state/user/useUserAction"
import { useUserState } from "state/user/useUserState"

export const usePersistedUser = () => {
  const { isLoggedIn } = useUserState()
  const { setUser } = useUserAction()
  const persistedUser = LocalStorageHelper.getItem("user")

  const persistUser = () => {
    if (!isLoggedIn && LocalStorageHelper.getItem("LocalStorageEnums,user")) {
      setUser(persistedUser)
    }
  }

  return { persistUser }
}
