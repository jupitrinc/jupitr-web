import { useEffect } from "react"
import { useUserAction } from "state/user/useUserAction"
import { useUserState } from "state/user/useUserState"
import {
  LocalStorageItemEnum,
  localStorageHelper,
} from "helper/localStorageHelper"
import { cookieHelper } from "helper/cookieHelper"
import { authTokenCookie } from "services/auth/useAuthService"
import { urlHelper } from "../../helper/urlHelper"
import { usePathname } from "next/navigation"
import { supabaseClientComponent } from "../../services/_supabase/client"

export const usePersistedUser = () => {
  const { isLoggedIn } = useUserState()
  const { setUser, signOut } = useUserAction()
  const persistedUser = localStorageHelper.getItem(LocalStorageItemEnum.user)
  const authToken = cookieHelper.getCookie(authTokenCookie)
  const { isPublicJobRoute, isPublicUrl } = urlHelper
  const pathname = usePathname()
  const verifyToken = async () => {
    // run only on protected routes
    if (
      !(isPublicJobRoute(pathname as string) || isPublicUrl(pathname as string))
    ) {
      const {
        error,
        data: { user },
      } = await supabaseClientComponent.auth.getUser()
      // if no user is found or returns error redirect back to login
      if (error || !user) {
        signOut()
      }
    }
  }
  const persistUser = async () => {
    if (!isLoggedIn && persistedUser) setUser(persistedUser)
    if (!authToken && isLoggedIn) signOut()
    await verifyToken()
  }

  useEffect(() => {
    persistUser()
  }, [])
}
