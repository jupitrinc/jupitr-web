import { useCompanyJobState } from "state/company_job/useCompanyJobState"

export const useJobChecks = () => {
  const { company_job } = useCompanyJobState()

  const title = () => {
    return Boolean(company_job.title)
  }

  const salary = () => {
    return Boolean(company_job.salary)
  }

  const workModel = () => {
    return Boolean(company_job.work_model && company_job.work_model.length > 0)
  }

  const skills = () => {
    return Boolean(company_job.skills && company_job.skills.length > 0)
  }

  const location = () => {
    return Boolean(company_job.location?.id)
  }

  const videos = () => {
    return company_job.company_videos.length > 0
  }

  const checksCompleted = () => {
    return (
      title() && salary() && workModel() && skills() && location() && videos()
    )
  }

  return { title, salary, workModel, skills, location, videos, checksCompleted }
}
