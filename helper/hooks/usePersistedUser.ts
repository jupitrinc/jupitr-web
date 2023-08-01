import { LocalStorageHelper } from "helper/localStorageHelper"
import { useEffect } from "react"
import { useUserAction } from "state/user/useUserAction"
import { useUserState } from "state/user/useUserState"

export const usePersistedUser = () => {
  const { isLoggedIn } = useUserState()
  const { setUser } = useUserAction()

  useEffect(() => {
    const persistedUser = LocalStorageHelper.getItem("user")

    if (!isLoggedIn && persistedUser) {
      setUser(persistedUser)
    }
  }, [isLoggedIn])
}
