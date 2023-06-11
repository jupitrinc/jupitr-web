import { supabase } from "../supabase"

const useGetUserId = async () => {
  const { data, error } = await supabase.auth.getUser()
  if (data) {
    return data?.user?.id
  }
  if (error) {
    console.error("getUserId: ", error)
  }
}
export default useGetUserId
