import { emailRedirectTo } from "services/auth/useAuthService"
import { supabaseClientComponent } from "../_supabase/client"
import {
  InviteCompanyMemberPayload,
  PermissionTypes,
  UpdateCompanyMemberProfile,
} from "./companyService.types"
import { errorHandlingEdgeFunctions } from "../../helper/errorHandlingEdgeFunctions"

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
    const { data, error } = await supabaseClientComponent.functions.invoke(
      "members-company",
      {
        body: payload,
        method: "PUT",
      }
    )

    if (error) {
      return await errorHandlingEdgeFunctions(error, "updateMembersPermission")
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
      return await errorHandlingEdgeFunctions(error, "deleteMembers")
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
      return await errorHandlingEdgeFunctions(error, "getMembers")
    }

    return { data, error }
  }

  const addMember = async (payload: InviteCompanyMemberPayload) => {
    const { data, error } = await supabaseClientComponent.functions.invoke(
      "invite-company-member",
      {
        body: { ...payload, redirectTo: emailRedirectTo() },
      }
    )

    if (error) {
      return await errorHandlingEdgeFunctions(error, "addMember")
    }

    return { data, error }
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
