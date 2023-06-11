import { supabase } from "services/_supabase/client"

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

  const login = async (email: string) => {
    return await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}`,
        "data": {
          "accountType": "talent",
        },
      },
    })
  }

  const logout = async () => {
    return await supabase.auth.signOut()
  }

  return { logout, login, getUserId }
}
export default useAuthService
