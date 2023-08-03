import { supabaseClientComponent } from "services/_supabase/client"

const useIndustryService = () => {
  const getAllIndustries = async () => {
    const { data, error } = await supabaseClientComponent
      .from("industry")
      .select("*")
      .order("name", { ascending: true })

    if (error) {
      console.error("get all industries: ", error)
    }

    return { data, error }
  }

  const searchIndustry = async (name: string) => {
    const { data, error } = await supabaseClientComponent
      .from("industry")
      .select("*")
      .ilike("name", `%${name}%`)

    if (error) {
      console.error("search industry: ", error)
    }

    return { data, error }
  }
  return { getAllIndustries, searchIndustry }
}

export default useIndustryService
