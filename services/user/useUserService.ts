import { supabaseClientComponent } from "../_supabase/client"
import { Database } from "../_supabase/database"
import { errorHandlingEdgeFunctions } from "../../helper/errorHandlingEdgeFunctions"

const useUserService = () => {
  const getUser = async (access_token: string) => {
    const { data, error } = await supabaseClientComponent.functions.invoke(
      "users",
      {
        headers: {
          "access_token": access_token,
        },
      }
    )

    if (error) {
      console.error("failed to getUser: ", error)
    }

    return { data, error }
  }
  const deleteUser = async (access_token: string) => {
    const { data, error } = await supabaseClientComponent.functions.invoke(
      "user-deletion",
      {
        headers: {
          "access_token": access_token,
        },
      }
    )

    if (error) {
      return await errorHandlingEdgeFunctions(error, "deleteUser")
    }

    return { data, error }
  }
  const updateUser = async (
    id: string,
    payload: Database["public"]["Tables"]["users"]["Update"]
  ) => {
    const { data, error } = await supabaseClientComponent
      .from("users")
      .update({ ...payload, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      console.error("failed to updateUser: ", error)
    }

    return { data, error }
  }
  return {
    getUser,
    updateUser,
    deleteUser,
  }
}

export default useUserService
