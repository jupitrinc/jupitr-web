import { supabaseClientComponent } from "services/_supabase/client"
import useUserService from "services/user/useUserService"

export const emailRedirectTo = () => `${location.origin}/auth/callback`
export const socialRedirectTo = () => `${location.origin}/login/verify`

const useAuthService = () => {
  const { deleteUser } = useUserService()

  const signInWithOtp = async (email: string) => {
    return await supabaseClientComponent.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: emailRedirectTo(),
      },
    })
  }
  const getSession = async () => {
    const { data: session } = await supabaseClientComponent.auth.getSession()
    return session
  }
  const signInWithGoogle = async () => {
    return await supabaseClientComponent.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: socialRedirectTo(),
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    })
  }

  const changeEmail = async (email: string) => {
    return await supabaseClientComponent.auth.updateUser(
      { email },
      { emailRedirectTo: socialRedirectTo() }
    )
  }

  const signOut = async () => {
    return await supabaseClientComponent.auth.signOut()
  }

  const deleteAccount = async () => {
    const userSession = await supabaseClientComponent.auth.getSession()
    signOut()
    return await deleteUser(userSession.data.session!.access_token)
  }

  return {
    signOut,
    signInWithOtp,
    signInWithGoogle,
    getSession,
    deleteAccount,
    changeEmail,
  }
}
export default useAuthService
