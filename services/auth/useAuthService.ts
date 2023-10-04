import { supabaseClientComponent } from "services/_supabase/client"
import userService from "services/user/userService"

export const emailRedirectTo = () => `${location.origin}/auth/callback`
export const socialRedirectTo = () => `${location.origin}/login/verify`

export const authTokenCookie =
  process?.env?.NODE_ENV === "production"
    ? "sb-api-auth-token"
    : "sb-cgbrcxjbovzwarqujqoq-auth-token"

const useAuthService = () => {
  const { deleteUser } = userService()

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
