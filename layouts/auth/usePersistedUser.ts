import { useEffect } from "react"
import { useUserAction } from "state/user/useUserAction"
import { useUserState } from "state/user/useUserState"
import {
  LocalStorageItemEnum,
  localStorageHelper,
} from "helper/localStorageHelper"
import { cookieHelper } from "helper/cookieHelper"
import { authTokenCookie } from "services/auth/useAuthService"

export const usePersistedUser = () => {
  const { isLoggedIn } = useUserState()
  const { setUser, signOut } = useUserAction()
  const persistedUser = localStorageHelper.getItem(LocalStorageItemEnum.user)

  const persistUser = () => {
    if (!isLoggedIn && persistedUser) setUser(persistedUser)
    if (!cookieHelper.getCookie(authTokenCookie) && isLoggedIn) signOut()
  }

  useEffect(() => {
    persistUser()
  }, [])
}
