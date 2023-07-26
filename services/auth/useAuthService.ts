import { supabase, supabaseClientComponent } from "services/_supabase/client"

const useAuthService = () => {
  const getUserId = async () => {
    const { data, error } = await supabase.auth.getUser()
    if (data) {
      return data?.user?.id
    }
    if (error) {
      console.error("getUserId: ", error)
    }
  }

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
        redirectTo: `${location.origin}/login/verify`,
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

  return { logout, signInWithOtp, getUserId, signInWithGoogle }
}
export default useAuthService
