import { supabase } from "../_supabase/client"
import { Database } from "../_supabase/database"

const useUserService = () => {
  const getUser = async (access_token: string) => {
    const { data, error } = await supabase.functions.invoke("users", {
      headers: {
        "access_token": access_token,
      },
    })

    if (data) {
      return data
    }
    if (error) {
      console.error("failed to getUser: ", error)
    }
  }

  const updateUser = async (
    payload: Database["public"]["Tables"]["users"]["Insert"]
  ) => {
    const { data, error } = await supabase
      .from("users")
      .upsert(payload)
      .select()

    if (data) {
      return data
    }
    if (error) {
      console.error("failed to update user: ", error)
    }
  }
  return {
    getUser,
  }
}

export default useUserService
