import { supabaseClientComponent } from "services/_supabase/client"
import {
  CreateCompanyPayload,
  UpdateCompanyProfilePayload,
} from "./companyService.types"
import { getError } from "../_supabase/edgeFunctions"
import { socialRedirectTo } from "../auth/useAuthService"

const companyService = () => {
  const addCompany = async (payload: CreateCompanyPayload) => {
    const { data, error: err } = await supabaseClientComponent.functions.invoke(
      "company",
      {
        method: "POST",
        body: { ...payload, redirectTo: socialRedirectTo() },
      }
    )

    if (err) {
      const error = await getError(err, "addCompany")

      console.error("companyService -> addCompany:", error.message)
      return { error }
    }

    return { data }
  }

  const updateCompanyProfile = async (payload: UpdateCompanyProfilePayload) => {
    const { data, error: err } = await supabaseClientComponent.functions.invoke(
      "company",
      {
        method: "PUT",
        body: payload,
      }
    )

    if (err) {
      const error = await getError(err, "updateCompanyProfile")

      console.error("companyService -> updateCompanyProfile:", error.message)
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
      console.error("companyService -> getCompanyProfile:", error.message)
    }

    return { data, error }
  }

  return {
    addCompany,
    getCompanyProfile,
    updateCompanyProfile,
  }
}

export default companyService
