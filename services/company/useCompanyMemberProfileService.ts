import { supabase } from "../_supabase/client"
import { UpdateCompanyMemberProfile } from "./companyService.types"

const useCompanyMemberProfileService = () => {
  const updateProfile = async (payload: UpdateCompanyMemberProfile) => {
    const { data, error } = await supabase
      .from("company_member_profile")
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
  return { updateProfile }
}

export default useCompanyMemberProfileService
