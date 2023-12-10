import { supabaseClientComponent } from "services/_supabase/client"
import { Database } from "services/_supabase/database"

const TALENT_PROFILE_TABLE = "talent_profile"
const USERS_TABLE = "users"

type TalentProfilePayload =
  Database["public"]["Tables"]["talent_profile"]["Update"]

export const talentProfileService = () => {
  const updateProfile = async (
    user_id: string,
    payload: TalentProfilePayload
  ) => {
    const { data, error } = await supabaseClientComponent
      .from(TALENT_PROFILE_TABLE)
      .update({
        ...payload,
        user_id: user_id,
        updated_at: new Date().toISOString(),
      })
      .eq("user_id", user_id)
      .select()
      .single()

    if (error) {
      console.error("talentProfileService -> updateProfile:", error.message)
    }

    return { data, error }
  }

  const getPublicProfile = async (username: string) => {
    const { data, error } = await supabaseClientComponent
      .from(USERS_TABLE)
      .select(
        "id, name, location, avatar_url, username, talent_profile(skills, socials, searching, intro_video, visibility, tagline, projects)"
      )
      .eq("active", true)
      .eq("username", username)
      .single()

    if (error) {
      console.error("talentProfileService -> getPublicProfile:", error.message)
    }

    return { data, error }
  }

  return {
    updateProfile,
    getPublicProfile,
  }
}
