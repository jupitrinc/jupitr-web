import { supabase } from "../_supabase/client"
import { Database } from "../_supabase/database"

const useUserService = () => {
  const getUser = async (access_token: string) => {
    const { data, error } = await supabase.functions.invoke("users", {
      headers: {
        "access_token": access_token,
      },
    })

    if (error) {
      console.error("failed to getUser: ", error)
    }

    return { data, error }
  }

  const updateUser = async (
    payload: Database["public"]["Tables"]["users"]["Insert"]
  ) => {
    const { data, error } = await supabase
      .from("users")
      .upsert(payload)
      .select()

    if (error) {
      console.error("failed to updateUser: ", error)
    }

    return { data, error }
  }
  return {
    getUser,
    updateUser,
  }
}

export default useUserService
