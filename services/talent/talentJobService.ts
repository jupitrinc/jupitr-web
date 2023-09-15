import { supabaseClientComponent } from "services/_supabase/client"
import useTalentApplicationService from "./useTalentApplicationService"
import { ITalentJob } from "state/talent_job/talentJob.types"

const JOBS_TABLE = "jobs"

interface GetJobsPayload {
  user_id: string
  skills: { id: string; name: string; level: number }[]
}

const talentJobService = () => {
  const { getApplications } = useTalentApplicationService()

  const getJobs = async (payload: GetJobsPayload) => {
    const { data, error } = await supabaseClientComponent
      .from(JOBS_TABLE)
      .select(
        "*, company(name, logo, website), company_videos(*, company_member_profile(job_title, users(name)))"
      )
      .eq("status", "open")
      .not("company_id", "is", null)

    if (error) {
      console.error("get talent jobs: ", error)

      return { data, error }
    } else {
      const matchedJobs = await matchJobs(payload, data)

      return { data: matchedJobs, error }
    }
  }

  const matchJobs = async (payload: GetJobsPayload, allJobs: any) => {
    const skillIds = payload.skills.map((skill) => skill.id)

    const { data: jobsApplied, error: getApplicationsError } =
      await getApplications(payload.user_id)

    const filteredJobsByUserSkills = allJobs?.filter((job: ITalentJob) =>
      job.skills.some((field) => skillIds.includes(field.id))
    )

    const removeJobsUserApplied = filteredJobsByUserSkills?.filter(
      (job: ITalentJob) =>
        !jobsApplied?.some((jApplied) => jApplied.job_id === job.id)
    )

    return removeJobsUserApplied
  }

  const getJob = async (jobId: string) => {
    const { data, error } = await supabaseClientComponent
      .from(JOBS_TABLE)
      .select(
        "*, company(name, logo, website), company_videos(*, company_member_profile(job_title, users(name)))"
      )
      .eq("id", jobId)
      .eq("status", "open")
      .not("company_id", "is", null)
      .single()

    if (error) {
      console.error("get job: ", error)
    }

    return { data, error }
  }

  return { getJobs, getJob }
}

export default talentJobService
