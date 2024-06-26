import { supabaseClientComponent } from "../_supabase/client"
import { Database } from "../_supabase/database"
import { getError } from "../_supabase/edgeFunctions"

const userService = () => {
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
      console.error("userService -> getUser:", error.message)
    }

    return { data, error }
  }
  const deleteUser = async (access_token: string) => {
    const { data, error: err } = await supabaseClientComponent.functions.invoke(
      "user-deletion",
      {
        headers: {
          "access_token": access_token,
        },
      }
    )

    if (err) {
      const error = await getError(err, "deleteUser")

      console.error("userService -> deleteUser:", error.message)
      return { error }
    }

    return { data }
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
      console.error("userService -> updateUser:", error.message)
    }

    return { data, error }
  }
  return {
    getUser,
    updateUser,
    deleteUser,
  }
}

export default userService
