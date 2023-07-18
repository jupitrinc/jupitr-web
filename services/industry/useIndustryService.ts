import { PostgrestError } from "@supabase/supabase-js"
import { supabase } from "services/_supabase/client"

type IndustryResponse = {
  industry?: { id: string; name: string }[]
  error?: PostgrestError
}

const useIndustryService = () => {
  const getAllIndustries = async (): Promise<IndustryResponse> => {
    const { data: industry, error } = await supabase
      .from("industry")
      .select("*")
      .order("name", { ascending: true })

    if (error) {
      console.error("failed to load industry service: ", error)
      return { error }
    }

    return { industry }
  }

  const searchIndustry = async (name: string) => {
    const { data: industry, error } = await supabase
      .from("industry")
      .select("*")
      .ilike("name", `%${name}%`)

    if (industry) {
      return industry
    }
    if (error) {
      console.error("failed to load search for industry: ", error)
    }
  }
  return { getAllIndustries, searchIndustry }
}

export default useIndustryService
