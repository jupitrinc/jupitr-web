import { supabaseClientComponent } from "../_supabase/client"
import { UpdateCompanyMemberProfile } from "./companyService.types"

const useCompanyMemberProfileService = () => {
  const updateProfile = async (payload: UpdateCompanyMemberProfile) => {
    const { data, error } = await supabaseClientComponent
      .from("company_member_profile")
      .upsert({ ...payload, updated_at: new Date().toISOString() })
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
