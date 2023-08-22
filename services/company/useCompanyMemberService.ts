import { supabaseClientComponent } from "../_supabase/client"
import { UpdateCompanyMemberProfile } from "./companyService.types"
import { AccountPermissionEnum } from "../../state/user/user.types"

const useCompanyMemberService = () => {
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
  const UpdateMembersPermission = async (payload: {
    company_id: string
    user_id: string
    permission: AccountPermissionEnum
  }) => {
    const { data, error } = await supabaseClientComponent.functions.invoke(
      "members-company",
      {
        body: payload,
        method: "PUT",
      }
    )

    if (error) {
      console.error("failed to update members: ", error)
    }

    return { data, error }
  }
  const deleteMember = async (payload: {
    company_id: string
    user_id: string
  }) => {
    const { data, error } = await supabaseClientComponent.functions.invoke(
      "members-company",
      {
        body: payload,
        method: "DELETE",
      }
    )

    if (error) {
      console.error("failed to delete member: ", error)
    }

    return { data, error }
  }
  const getMembers = async (company_id: string) => {
    const { data, error } = await supabaseClientComponent.functions.invoke(
      "members-company",
      {
        headers: {
          company_id,
        },
        method: "GET",
      }
    )

    if (error) {
      console.error("failed to get company members: ", error)
    }

    return { data, error }
  }
  return { updateProfile, getMembers, UpdateMembersPermission, deleteMember }
}

export default useCompanyMemberService
