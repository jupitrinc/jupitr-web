import { supabaseClientComponent } from "services/_supabase/client"
import {
  CreateCompanyPayload,
  UpdateCompanyProfilePayload,
} from "./companyService.types"
import { errorHandlingEdgeFunctions } from "../../helper/errorHandlingEdgeFunctions"

const useCompanyService = () => {
  const addCompany = async (payload: CreateCompanyPayload) => {
    const { data, error } = await supabaseClientComponent.functions.invoke(
      "create-company",
      {
        body: payload,
      }
    )

    if (error) {
      return await errorHandlingEdgeFunctions(error, "addCompany")
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
      return await errorHandlingEdgeFunctions(error, "updateCompanyProfile")
    }

    return { data, error }
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
