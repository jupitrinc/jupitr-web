import { supabaseClientComponent } from "services/_supabase/client"

const useCompanyJobApplicationService = () => {
  const getAllApplications = async (job_id: string) => {
    const { data, error } = await supabaseClientComponent
      .from("jobs")
      .select(
        "*, applications(*, job_id, users(id, name, email, talent_profile(user_id ,socials, skills)))"
      )
      .eq("id", job_id)
      .single()
    if (error) {
      console.error("get applications: ", error)
    }

    return { data, error }
  }

  return {
    getAllApplications,
  }
}

export default useCompanyJobApplicationService
