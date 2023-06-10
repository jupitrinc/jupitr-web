import { supabase } from "../supabase"
import { Database } from "../../_types/supabase"

type TalentProfilePayload =
  Database["public"]["Tables"]["talent_profile"]["Insert"]
const useUpdateProfile = async (payload: TalentProfilePayload) => {
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

export default useUpdateProfile
