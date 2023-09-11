import { supabaseClientComponent } from "services/_supabase/client"
import {
  CreateCompanyPayload,
  UpdateCompanyProfilePayload,
} from "./companyService.types"
import { FunctionsHttpError } from "@supabase/supabase-js"

const useCompanyService = () => {
  const addCompany = async (payload: CreateCompanyPayload) => {
    const { data, error } = await supabaseClientComponent.functions.invoke(
      "create-company",
      {
        body: payload,
      }
    )

    if (error) {
      if (error instanceof FunctionsHttpError) {
        const errorMessage = await error.context.json()
        console.error("create company - FunctionsHttpError: ", errorMessage)
        return errorMessage
      } else {
        console.error("create company: ", error)
        return error.message
      }
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
      if (error instanceof FunctionsHttpError) {
        const errorMessage = await error.context.json()
        console.error(
          "update company profile - FunctionsHttpError: ",
          errorMessage
        )
        return errorMessage
      } else {
        console.error("update company profile: ", error)
        return error.message
      }
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
