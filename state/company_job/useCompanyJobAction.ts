import { useContext } from "react"
import { ICompanyJob, CompanyJobActionEnum } from "./companyJob.types"
import { CompanyJobContext } from "./CompanyJobContext"
import useCompanyJobService from "services/company/useCompanyJobService"
import { useRouter } from "next/router"
import { ISkill } from "state/talent_profile/talentProfile.types"

export function useCompanyJobAction() {
  const router = useRouter()
  const { dispatch } = useContext(CompanyJobContext)
  const {
    addJob: addJobService,
    getJob: getJobService,
    updateJob: updateJobService,
  } = useCompanyJobService()

  const addJob = async (
    status: ICompanyJob["status"],
    company_id: ICompanyJob["company_id"]
  ) => {
    if (!status || !company_id) return

    dispatch({
      type: CompanyJobActionEnum.ADD_COMPANY_JOB_BEGIN,
    })

    const { data, error } = await addJobService({
      status: status,
      company_id: company_id,
    })

    if (error) {
      dispatch({
        type: CompanyJobActionEnum.ADD_COMPANY_JOB_FAILURE,
        payload: error.message,
      })
    } else if (data) {
      dispatch({
        type: CompanyJobActionEnum.ADD_COMPANY_JOB_SUCCESS,
      })

      router.push(`/c/jobs/${data[0].id}`)
    }
  }

  const getJob = async (job_id: ICompanyJob["id"]) => {
    if (!job_id) return

    dispatch({
      type: CompanyJobActionEnum.GET_COMPANY_JOB_BEGIN,
    })

    const { data, error } = await getJobService(job_id)

    if (error) {
      dispatch({
        type: CompanyJobActionEnum.GET_COMPANY_JOB_FAILURE,
        payload: error.message,
      })
    } else if (data) {
      dispatch({
        type: CompanyJobActionEnum.GET_COMPANY_JOB_SUCCESS,
        payload: data,
      })
    }
  }

  const updateTitle = async (
    job_id: ICompanyJob["id"],
    title: ICompanyJob["title"]
  ) => {
    if (!job_id || !title) return

    const { data, error } = await updateJobService(job_id, { title: title })

    if (data) {
      dispatch({
        type: CompanyJobActionEnum.UPDATE_COMPANY_JOB_TITLE,
        payload: data.title,
      })
    }
  }

  const updateSalary = async (
    job_id: ICompanyJob["id"],
    salary: ICompanyJob["salary"]
  ) => {
    if (!job_id || !salary) return

    const { data, error } = await updateJobService(job_id, { salary: salary })

    if (data) {
      dispatch({
        type: CompanyJobActionEnum.UPDATE_COMPANY_JOB_SALARY,
        payload: data.salary,
      })
    }
  }

  const updateWorkModel = async (
    job_id: ICompanyJob["id"],
    work_model: ICompanyJob["work_model"]
  ) => {
    if (!job_id || !work_model) return

    const { data, error } = await updateJobService(job_id, {
      work_model: work_model,
    })

    if (data) {
      dispatch({
        type: CompanyJobActionEnum.UPDATE_COMPANY_JOB_WORK_MODEL,
        payload: data.work_model,
      })
    }
  }

  const updateLocation = async (
    job_id: ICompanyJob["id"],
    location: ICompanyJob["location"]
  ) => {
    if (!job_id || !location) return

    const { data, error } = await updateJobService(job_id, {
      location: location,
    })

    if (data) {
      dispatch({
        type: CompanyJobActionEnum.UPDATE_COMPANY_JOB_LOCATION,
        payload: data.location,
      })
    }
  }

  const addSkill = async (
    job_id: ICompanyJob["id"],
    newSkill: ISkill,
    skills: ISkill[]
  ) => {
    if (
      !job_id ||
      !newSkill.id ||
      (skills && skills.filter((s) => s.id === newSkill.id).length > 0)
    )
      return

    const { data, error } = await updateJobService(job_id, {
      skills: skills ? [...skills, newSkill] : [newSkill],
    })

    if (data) {
      dispatch({
        type: CompanyJobActionEnum.ADD_COMPANY_JOB_SKILL,
        payload: data.skills,
      })
    }
  }

  const removeSkill = async (
    job_id: ICompanyJob["id"],
    skill: ISkill,
    skills: ISkill[]
  ) => {
    if (!job_id || !skill.id) return

    const { data, error } = await updateJobService(job_id, {
      skills: skills.filter((s) => s.id !== skill.id),
    })

    if (data) {
      dispatch({
        type: CompanyJobActionEnum.REMOVE_COMPANY_JOB_SKILL,
        payload: data.skills,
      })
    }
  }

  const updateSkill = async (
    job_id: ICompanyJob["id"],
    skill: ISkill,
    skills: ISkill[]
  ) => {
    if (!job_id || !skill.id) return

    const { data, error } = await updateJobService(job_id, {
      skills: skills.map((s) => {
        if (s.id === skill.id) {
          return {
            ...s,
            level: skill.level,
          }
        }
        return s
      }),
    })

    if (data) {
      dispatch({
        type: CompanyJobActionEnum.UPDATE_COMPANY_JOB_SKILL,
        payload: data.skills,
      })
    }
  }

  return {
    addJob,
    getJob,
    updateTitle,
    updateSalary,
    updateWorkModel,
    updateLocation,
    addSkill,
    removeSkill,
    updateSkill,
  }
}
