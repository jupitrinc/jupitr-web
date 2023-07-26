import { supabase } from "services/_supabase/client"
import { Database } from "services/_supabase/database"

type TalentProfilePayload =
  Database["public"]["Tables"]["talent_profile"]["Insert"]

export const useTalentProfileService = () => {
  const updateProfile = async (payload: TalentProfilePayload) => {
    const { data, error } = await supabase
      .from("talent_profile")
      .upsert({ ...payload, updated_at: new Date().toISOString() })
      .select()
      .single()

    if (error) {
      console.error("Error updating talent profile!", error)
      return error
    }
    if (data) {
      return data
    }
  }

  return {
    updateProfile,
  }
}
