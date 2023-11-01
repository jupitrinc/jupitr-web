import { supabaseClientComponent } from "services/_supabase/client"
import { getError } from "../_supabase/edgeFunctions"

const countriesService = () => {
  const searchCountries = async (searchTerm: string) => {
    const { data, error: err } = await supabaseClientComponent.functions.invoke(
      `countries?search=${searchTerm}`,
      {
        method: "GET",
      }
    )
    if (err) {
      const error = await getError(err, "searchCountries")

      console.error("countriesService -> searchCountries:", error.message)
      return { error }
    }

    return { data }
  }
  const searchCities = async (search: string) => {
    const { data, error } = await supabaseClientComponent
      .from("cities")
      .select("name, country:country_id(*)")
      .textSearch("name", `'${search}'`)

    if (error) {
      console.error("countriesService -> searchCities:", error.message)
    }

    return { data, error }
  }

  return { searchCountries, searchCities }
}

export default countriesService
