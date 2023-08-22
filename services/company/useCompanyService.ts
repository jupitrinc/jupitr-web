import { supabaseClientComponent } from "services/_supabase/client"
import {
  CreateCompanyPayload,
  InviteCompanyMemberPayload,
  UpdateCompanyProfilePayload,
} from "./companyService.types"
import { headers } from "next/headers"

const useCompanyService = () => {
  const addCompany = async (payload: CreateCompanyPayload) => {
    const { data, error } = await supabaseClientComponent.functions.invoke(
      "create-company",
      {
        body: payload,
      }
    )

    if (error) {
      console.error("create company: ", error)
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
  const updateCompanyProfile = async (payload: UpdateCompanyProfilePayload) => {
    const { data, error } = await supabaseClientComponent.functions.invoke(
      "update-company",
      {
        body: payload,
      }
    )

    if (error) {
      console.error("update company profile: ", error)
    }

    return { data, error }
  }
  const inviteCompanyMember = async (payload: InviteCompanyMemberPayload) => {
    const { data, error } = await supabaseClientComponent.functions.invoke(
      "invite-company-member",
      {
        body: payload,
      }
    )

    if (data) {
      return data
    }
    if (error) {
      console.error("invite company member: ", error)
    }
  }

  const getCompanyProfile = async (id: string) => {
    const { data, error } = await supabaseClientComponent
      .from("company")
      .select()
      .eq("id", id)
      .single()

    if (error) {
      console.error("get company profile: ", error)
    }

    return { data, error }
  }

  return {
    addCompany,
    inviteCompanyMember,
    getCompanyProfile,
    updateCompanyProfile,
    getMembers,
  }
}

export default useCompanyService
