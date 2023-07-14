import { supabase } from "services/_supabase/client"
import {
  CreateCompanyPayload,
  InviteCompanyMemberPayload,
} from "./companyService.types"

const useCompanyService = () => {
  const registerCompany = async (payload: CreateCompanyPayload) => {
    const { data, error } = await supabase.functions.invoke("create-company", {
      body: payload,
    })

    if (data) {
      return data
    }
    if (error) {
      console.error("create company: ", error)
    }
  }

  const inviteCompanyMember = async (payload: InviteCompanyMemberPayload) => {
    const { data, error } = await supabase.functions.invoke(
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
    const { data: company, error } = await supabase.from("company").select(id)
    if (company) {
      return company
    }
    if (error) {
      console.error("failed to get company: ", error)
    }
  }

  return { registerCompany, inviteCompanyMember, getCompanyProfile }
}

export default useCompanyService
