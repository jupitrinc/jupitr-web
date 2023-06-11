import { supabase } from "../supabase"

const useLogout = async () => {
  return await supabase.auth.signOut()
}
export default useLogout
