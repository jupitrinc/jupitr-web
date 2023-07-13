import { supabase } from "services/_supabase/client"

const useIndustryService = () => {
  const getAllIndustries = async () => {
    const { data: industry, error } = await supabase
      .from("industry")
      .select("*")
      .order("name", { ascending: true })

    if (industry) {
      return industry
    }
    if (error) {
      console.error("failed to load industry service: ", error)
    }
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
