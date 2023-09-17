import { supabaseClientComponent } from "services/_supabase/client"
import {
  CreateCompanyPayload,
  UpdateCompanyProfilePayload,
} from "./companyService.types"
import { getError } from "../_supabase/edgeFunctions"
import { emailRedirectTo } from "../auth/useAuthService"

const useCompanyService = () => {
  const addCompany = async (payload: CreateCompanyPayload) => {
    const { data, error: err } = await supabaseClientComponent.functions.invoke(
      "create-company",
      {
        body: { ...payload, redirectTo: emailRedirectTo() },
      }
    )

    if (err) {
      const error = await getError(err, "addCompany")
      return { error }
    }

    return { data }
  }

  const updateCompanyProfile = async (payload: UpdateCompanyProfilePayload) => {
    const { data, error: err } = await supabaseClientComponent.functions.invoke(
      "update-company",
      {
        body: payload,
      }
    )

    if (err) {
      const error = await getError(err, "updateCompanyProfile")
      return { error }
    }

    return { data }
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
    getCompanyProfile,
    updateCompanyProfile,
  }
}

export default useCompanyService
