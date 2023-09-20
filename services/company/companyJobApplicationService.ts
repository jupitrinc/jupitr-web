import { supabaseClientComponent } from "services/_supabase/client"
import { getError } from "../_supabase/edgeFunctions"

const companyJobApplicationService = () => {
  const getAllApplications = async (job_id: string, company_id: string) => {
    const { data, error: err } = await supabaseClientComponent.functions.invoke(
      `jobs-apps?job_id=${job_id}&apps=true`,
      {
        method: "GET",
        headers: {
          "company_id": company_id,
        },
      }
    )

    if (err) {
      const error = await getError(err, "getAllApplications")

      console.error(
        "companyJobApplicationService -> getAllApplications:",
        error.message
      )
      return { error }
    }

    return { data }
  }

  return {
    getAllApplications,
  }
}

export default companyJobApplicationService
