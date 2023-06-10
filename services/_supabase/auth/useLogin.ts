import { supabase } from "../supabase"

const useLogin = async (email: string) => {
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
export default useLogin
