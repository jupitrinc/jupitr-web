import { useRouter } from "next/router"
import { useEffect } from "react"
import { supabaseClientComponent } from "../../services/_supabase/client"
import { useUserAction } from "state/user/useUserAction"
import { useUserState } from "state/user/useUserState"
import {
  LocalStorageItemEnum,
  localStorageHelper,
} from "helper/localStorageHelper"
import { cookieHelper } from "helper/cookieHelper"
import { authTokenCookie } from "services/auth/useAuthService"
import { urlHelper } from "../../helper/urlHelper"

export const usePersistedUser = () => {
  const router = useRouter()
  const pathname = router.pathname
  const { isLoggedIn } = useUserState()
  const { setUser, signOut } = useUserAction()
  const persistedUser = localStorageHelper.getItem(LocalStorageItemEnum.user)
  const authToken = cookieHelper.getCookie(authTokenCookie)
  const { isPublicJobRoute, isPublicUrl } = urlHelper

  const verifyToken = async () => {
    if (
      !(isPublicJobRoute(pathname as string) || isPublicUrl(pathname as string))
    ) {
      const {
        error,
        data: { user },
      } = await supabaseClientComponent.auth.getUser()

      if (error || !user) {
        signOut()
      }
    }
  }
  const persistUser = async () => {
    if (!isLoggedIn && persistedUser) setUser(persistedUser)
    if (!authToken && isLoggedIn) signOut()

    if (pathname) await verifyToken()
  }

  useEffect(() => {
    persistUser()
  }, [])
}
