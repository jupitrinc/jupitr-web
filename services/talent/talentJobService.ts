import { supabaseClientComponent } from "services/_supabase/client"

const talentJobService = () => {
  const getJobs = async () => {
    const { data, error } = await supabaseClientComponent.functions.invoke(
      "jobs",
      {
        method: "GET",
      }
    )

    if (error) {
      console.error("talentJobService -> getJobs:", error.message)

      return { data, error }
    } else {
      return { data, error }
    }
  }

  const getJob = async (jobId: string) => {
    const { data, error } = await supabaseClientComponent.functions.invoke(
      `jobs/${jobId}`,
      {
        method: "GET",
      }
    )
    if (error) {
      console.error("talentJobService -> getJob:", error.message)
    }

    return { data, error }
  }

  return { getJobs, getJob }
}

export default talentJobService
