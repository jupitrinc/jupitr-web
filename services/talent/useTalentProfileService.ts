import { supabaseClientComponent } from "services/_supabase/client"
import { Database } from "services/_supabase/database"

type TalentProfilePayload =
  Database["public"]["Tables"]["talent_profile"]["Insert"]

export const useTalentProfileService = () => {
  const updateProfile = async (payload: TalentProfilePayload) => {
    const { data, error } = await supabaseClientComponent
      .from("talent_profile")
      .update({
        ...payload,
        updated_at: new Date().toISOString(),
      })
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
