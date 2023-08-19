import { supabaseClientComponent } from "services/_supabase/client"
import { Database } from "services/_supabase/database"

type TalentProfilePayload =
  Database["public"]["Tables"]["talent_profile"]["Update"]

export const useTalentProfileService = () => {
  const updateProfile = async (
    user_id: string,
    payload: TalentProfilePayload
  ) => {
    const { data, error } = await supabaseClientComponent
      .from("talent_profile")
      .update({
        ...payload,
        user_id: user_id,
        updated_at: new Date().toISOString(),
      })
      .eq("user_id", user_id)
      .select()
      .single()

    if (error) {
      console.error("update talent profile: ", error)
    }

    return { data, error }
  }

  return {
    updateProfile,
  }
}
