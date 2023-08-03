import { supabase } from "services/_supabase/client"
import {
  CreateCompanyPayload,
  InviteCompanyMemberPayload,
  UpdateCompanyProfilePayload,
} from "./companyService.types"

const useCompanyService = () => {
  const addCompany = async (payload: CreateCompanyPayload) => {
    const { data, error } = await supabase.functions.invoke("create-company", {
      body: payload,
    })

    if (error) {
      console.error("create company: ", error)
    }

    return { data, error }
  }
  const updateCompanyProfile = async (payload: UpdateCompanyProfilePayload) => {
    const { data, error } = await supabase
      .from("company")
      .upsert({ ...payload, updated_at: new Date().toISOString() })
      .select()

    if (error) {
      console.error("update company: ", error)
    }

    return { data, error }
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
    const { data, error } = await supabase.from("company").select(id)

    if (error) {
      console.error("Get company: ", error)
    }

    return { data, error }
  }

  return {
    addCompany,
    inviteCompanyMember,
    getCompanyProfile,
    updateCompanyProfile,
  }
}

export default useCompanyService
