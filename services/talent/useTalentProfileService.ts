import { supabase } from "services/_supabase/client"
import { Database } from "services/_supabase/database"

type TalentProfilePayload =
  Database["public"]["Tables"]["talent_profile"]["Insert"]

export const useTalentProfileService = () => {
  const getProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from("talent_profile")
      .select()
      .eq("id", userId)
      .single()
    if (data) {
      return data
    }
    if (error) {
      console.error("Failed to get talent profile: ", error)
    }
  }

  const updateProfile = async (payload: TalentProfilePayload) => {
    const newProfileData = { ...payload } //clone te data
    if (newProfileData.new_profile === true) {
      newProfileData.new_profile = false
    }
    newProfileData.updated_at = new Date().toISOString()
    const { data, error } = await supabase
      .from("talent_profile")
      .upsert(newProfileData)
      .select()
      .single()

    if (error) {
      console.error("Error updating the data!", error)
      return error
    }
    if (data) {
      return data
    }
  }

  return {
    getProfile,
    updateProfile,
  }
}
