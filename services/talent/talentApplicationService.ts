import { supabaseClientComponent } from "services/_supabase/client"

interface AddApplicationPayload {
  user_id: string
  job_id: string
  video_url: string
  skills: { id: string; name: string; level: number }[]
}

const APPLICATIONS_TABLE = "applications"

const talentApplicationService = () => {
  const addApplication = async (payload: AddApplicationPayload) => {
    const { data, error } = await supabaseClientComponent
      .from(APPLICATIONS_TABLE)
      .insert(payload)
    if (error) {
      console.error(
        "talentApplicationService -> addApplication:",
        error.message
      )
    }

    return { data, error }
  }
  const getApplications = async (user_id: string) => {
    const { data, error } = await supabaseClientComponent
      .from(APPLICATIONS_TABLE)
      .select("*")
      .eq("user_id", user_id)
    if (error) {
      console.error(
        "talentApplicationService -> getApplications:",
        error.message
      )
    }

    return { data, error }
  }
  return {
    addApplication,
    getApplications,
  }
}
export default talentApplicationService
