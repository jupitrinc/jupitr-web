import { emailRedirectTo } from "services/auth/useAuthService"
import { supabaseClientComponent } from "../_supabase/client"
import {
  InviteCompanyMemberPayload,
  PermissionTypes,
  UpdateCompanyMemberProfile,
} from "./companyService.types"
import { getError } from "../_supabase/edgeFunctions"

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
  const updateMembersPermission = async (payload: {
    company_id: string
    user_id: string
    permission: PermissionTypes
  }) => {
    const { data, error: err } = await supabaseClientComponent.functions.invoke(
      "members-company",
      {
        body: payload,
        method: "PUT",
      }
    )

    if (err) {
      const error = await getError(err, "updateMembersPermission")
      return { error }
    }

    return { data }
  }
  const deleteMember = async (payload: {
    company_id: string
    user_id: string
  }) => {
    const { data, error: err } = await supabaseClientComponent.functions.invoke(
      "members-company",
      {
        body: payload,
        method: "DELETE",
      }
    )

    if (err) {
      const error = await getError(err, "deleteMembers")
      return { error }
    }

    return { data }
  }
  const getMembers = async (company_id: string) => {
    const { data, error: err } = await supabaseClientComponent.functions.invoke(
      "members-company",
      {
        headers: {
          company_id,
        },
        method: "GET",
      }
    )

    if (err) {
      const error = await getError(err, "getMembers")
      return { error }
    }

    return { data }
  }

  const addMember = async (payload: InviteCompanyMemberPayload) => {
    const { data, error: err } = await supabaseClientComponent.functions.invoke(
      "invite-company-member",
      {
        body: { ...payload, redirectTo: emailRedirectTo() },
      }
    )

    if (err) {
      const error = await getError(err, "addMember")
      return { error }
    }

    return { data }
  }

  return {
    updateProfile,
    getMembers,
    updateMembersPermission,
    deleteMember,
    addMember,
  }
}

export default useCompanyMemberService
