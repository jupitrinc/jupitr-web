import { supabaseClientComponent } from "services/_supabase/client"

const companyJobApplicationService = () => {
  const getAllApplications = async (job_id: string) => {
    const { data, error } = await supabaseClientComponent
      .from("jobs")
      .select("*, applications(*, users(name, email, talent_profile(socials)))")
      .eq("id", job_id)
      .single()
    if (error) {
      console.error(
        "companyJobApplicationService -> getAllApplications:",
        error.message
      )
    }

    return { data, error }
  }

  return {
    getAllApplications,
  }
}

export default companyJobApplicationService
