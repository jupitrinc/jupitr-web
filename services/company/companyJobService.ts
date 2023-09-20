import { supabaseClientComponent } from "services/_supabase/client"
import { getError } from "../_supabase/edgeFunctions"

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

const companyJobService = () => {
  const addJob = async (payload: AddJobPayload) => {
    const { data, error } = await supabaseClientComponent
      .from(JOBS_TABLE)
      .insert(payload)
      .select()
    if (error) {
      console.error("companyJobService -> addJob:", error.message)
    }

    return { data, error }
  }

  const getJob = async (id: string, company_id) => {
    const { data, error: err } = await supabaseClientComponent.functions.invoke(
      `jobs-apps?job_id=${id}&apps=false`,
      {
        method: "GET",
        headers: {
          "company_id": company_id,
        },
      }
    )
    if (err) {
      const error = await getError(err, "getAllApplications")

      console.error("companyJobService -> getJob:", error.message)
      return error
    }

    return {
      data,
    }
  }

  const getAllJobs = async (company_id: string) => {
    const { data, error } = await supabaseClientComponent
      .from(JOBS_TABLE)
      .select("id, title, location, status")
      .eq("company_id", company_id)
      .neq("status", "archived")

    if (error) {
      console.error("companyJobService -> getAllJobs:", error.message)
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
      console.error("companyJobService -> updateJob:", error.message)
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

export default companyJobService
