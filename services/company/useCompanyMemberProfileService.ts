import { supabaseClientComponent } from "../_supabase/client"
import { UpdateCompanyMemberProfile } from "./companyService.types"

const useCompanyMemberProfileService = () => {
  const updateProfile = async (
    payload: UpdateCompanyMemberProfile,
    user_id: string
  ) => {
    const { data, error } = await supabaseClientComponent
      .from("company_member_profile")
      .update({ ...payload, updated_at: new Date().toISOString() })
      .eq("user_id", user_id)
      .select()
      .single()

    if (error) {
      console.error("update company member profile: ", error)
    }

    return { data, error }
  }
  return { updateProfile }
}

export default useCompanyMemberProfileService
