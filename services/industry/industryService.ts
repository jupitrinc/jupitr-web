import { supabaseClientComponent } from "services/_supabase/client"

const industryService = () => {
  const getAllIndustries = async () => {
    const { data, error } = await supabaseClientComponent
      .from("industry")
      .select("*")
      .order("name", { ascending: true })

    if (error) {
      console.error("industryService -> getAllIndustries:", error.message)
    }

    return { data, error }
  }

  const searchIndustry = async (name: string) => {
    const { data, error } = await supabaseClientComponent
      .from("industry")
      .select("*")
      .ilike("name", `%${name}%`)

    if (error) {
      console.error("industryService -> searchIndustry:", error.message)
    }

    return { data, error }
  }
  return { getAllIndustries, searchIndustry }
}

export default industryService
