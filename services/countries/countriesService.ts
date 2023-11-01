import { supabaseClientComponent } from "services/_supabase/client"

const countriesService = () => {
  const searchCountries = async (
    searchTerm: string,
    options: { withCity: boolean }
  ) => {
    const { data, error } = await supabaseClientComponent
      .from("countries")
      .select(`${options?.withCity ? "*, cities(name)" : "*"}`)
      .textSearch("name", `'${searchTerm}'`)
    if (error) {
      console.error("countriesService -> searchCountries:", error.message)
    }
    return { data, error }
  }
  const searchCities = async (search: string) => {
    const { data, error } = await supabaseClientComponent
      .from("cities")
      .select("*, country:country_id(*)")
      .textSearch("name", `'${search}'`)

    if (error) {
      console.error("countriesService -> searchCities:", error.message)
    }

    return { data, error }
  }

  return { searchCountries, searchCities }
}

export default countriesService
