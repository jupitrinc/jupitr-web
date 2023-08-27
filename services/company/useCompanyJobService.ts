import { supabaseClientComponent } from "services/_supabase/client"

const JOBS_TABLE = "jobs"

interface AddJobPayload {
  company_id: string
  status: string
}

interface UpdateJobPayload {
  title?: string
  salary?: string
  status?: string
  location?: {}
  work_model?: string[]
  visa_sponsorship?: boolean
  skills?: { id: string; name: string; level: number }[]
  application_video?: {}
}

const useCompanyJobService = () => {
  const addJob = async (payload: AddJobPayload) => {
    const { data, error } = await supabaseClientComponent
      .from(JOBS_TABLE)
      .insert(payload)
      .select()
    if (error) {
      console.error("add job: ", error)
    }

    return { data, error }
  }

  const getJob = async (id: string) => {
    const { data, error } = await supabaseClientComponent
      .from(JOBS_TABLE)
      .select(
        "*,  applications(count), company_videos(*, company_member_profile(job_title, users(name)))"
      )
      .eq("id", id)
      .single()

    if (error) {
      console.error("get job: ", error)
    }

    return {
      data,
      error,
    }
  }

  const getAllJobs = async (company_id: string) => {
    const { data, error } = await supabaseClientComponent
      .from(JOBS_TABLE)
      .select("id, title, location, status")
      .eq("company_id", company_id)
      .neq("status", "archived")

    if (error) {
      console.error("get all job: ", error)
    }

    return { data, error }
  }

  const updateJob = async (id: string, payload: UpdateJobPayload) => {
    const { data, error } = await supabaseClientComponent
      .from(JOBS_TABLE)
      .update({
        ...payload,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      console.error("update job:", error)
    }

    return { data, error }
  }

  return {
    addJob,
    getJob,
    getAllJobs,
    updateJob,
  }
}

export default useCompanyJobService
