import { supabaseClientComponent } from "services/_supabase/client"

const JOBS_TABLE = "jobs"

const useTalentJobService = () => {
  const getJobs = async () => {
    const { data, error } = await supabaseClientComponent
      .from(JOBS_TABLE)
      .select(
        "*, company(name, logo, website), company_videos(*, company_member_profile(job_title, users(name)))"
      )
      .eq("status", "open")

    if (error) {
      console.error("get talent jobs: ", error)
    }

    return { data, error }
  }

  return { getJobs }
}

export default useTalentJobService
