import { emailRedirectTo } from "services/auth/useAuthService"
import { supabaseClientComponent } from "../_supabase/client"
import {
  InviteCompanyMemberPayload,
  PermissionTypes,
  UpdateCompanyMemberProfile,
} from "./companyService.types"
import { getError } from "../_supabase/edgeFunctions"

const companyMemberService = () => {
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
      console.error("companyMemberService -> updateProfile:", error.message)
    }

    return { data, error }
  }
  const updateMemberPermission = async (payload: {
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

      console.error(
        "companyMemberService -> updateMemberPermission:",
        error.message
      )

      return { error }
    }

    return { data }
  }
  const deleteMember = async (payload: {
    company_id: string
    user_id: string
    member_id: string
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

      console.error("companyMemberService -> deleteMember:", error.message)
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

      console.error("companyMemberService -> getMembers:", error.message)
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

      console.error("companyMemberService -> addMember:", error.message)
      return { error }
    }

    return { data }
  }

  return {
    updateProfile,
    getMembers,
    updateMemberPermission,
    deleteMember,
    addMember,
  }
}

export default companyMemberService
