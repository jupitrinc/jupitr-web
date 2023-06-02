/*const useAuthService = () => {
  const supabase = useSupabaseAuthClient()
  const signInWithEmail = async (email: string) => {
    return await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}`,
      },
    })
  }
  const getUserId = async () => {
    const { data, error } = await supabase.auth.getUser()
    if (data) {
      return data?.user?.id
    }
    if (error) {
      console.error("getUserId: ", error)
    }
  }
  const getUserProfile = async (id: string) => {
    // const id = await getUserId();
    const { data, error } = await supabase
      .from("profile")
      .select()
      .eq("id", id)
      .single()
    if (data) {
      return data as TProfile
    }
    if (error) {
      console.error("getUserProfile: ", error)
    }
  }

  return {
    signInWithEmail,
    getUserProfile,
    getUserId,
    supabase,
  }
}

export default useAuthService
*/
