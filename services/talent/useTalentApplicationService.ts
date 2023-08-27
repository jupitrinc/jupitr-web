import { supabaseClientComponent } from "services/_supabase/client"

interface AddApplicationPayload {
  user_id: string
  job_id: string
  video_url: string
  skills: { id: string; name: string; level: number }[]
}

const APPLICATIONS_TABLE = "applications"

const useTalentApplicationService = () => {
  const addApplication = async (payload: AddApplicationPayload) => {
    const { data, error } = await supabaseClientComponent
      .from(APPLICATIONS_TABLE)
      .insert(payload)
    if (error) {
      console.error("talent add application: ", error)
    }

    return { data, error }
  }

  return {
    addApplication,
  }
}
export default useTalentApplicationService
