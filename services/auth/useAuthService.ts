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

  const logout = async () => {
    return await supabase.auth.signOut()
  }

  return { logout, signInWithOtp, getUserId }
}
export default useAuthService
