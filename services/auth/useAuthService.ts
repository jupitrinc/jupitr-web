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

  const signInWithGoogle = async () => {
    return await supabaseClientComponent.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/login`,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    })
  }

  const logout = async () => {
    return await supabase.auth.signOut()
  }

  return { logout, signInWithOtp, signInWithGoogle }
}
export default useAuthService
