import { useEffect } from "react"
import { useUserAction } from "state/user/useUserAction"
import { useUserState } from "state/user/useUserState"
import {
  LocalStorageItemEnum,
  localStorageHelper,
} from "helper/localStorageHelper"

export const usePersistedUser = () => {
  const { isLoggedIn } = useUserState()
  const { setUser } = useUserAction()
  const persistedUser = localStorageHelper.getItem(LocalStorageItemEnum.user)

  useEffect(() => {
    if (!isLoggedIn && persistedUser) {
      setUser(persistedUser)
    }
  }, [])
}
