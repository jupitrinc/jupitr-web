import { supabase, supabaseClientComponent } from "services/_supabase/client"

const useAuthService = () => {
  const signInWithOtp = async (email: string) => {
    return await supabaseClientComponent.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
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
        redirectTo: `${location.origin}/login/verify`,
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
      { emailRedirectTo: `${location.origin}/login` }
    )
  }

  const signOut = async () => {
    return await supabaseClientComponent.auth.signOut()
  }

  return { signOut, signInWithOtp, signInWithGoogle, getSession, changeEmail }
}
export default useAuthService
