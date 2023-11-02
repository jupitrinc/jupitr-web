import { useContext } from "react"
import { useNotificationAction } from "state/notification/useNotificationAction"
import {
  ICompanyJob,
  CompanyJobActionEnum,
  JobStatusEnum,
  AddJobPayload,
} from "./companyJob.types"
import { CompanyJobContext } from "./CompanyJobContext"
import companyJobService from "services/company/companyJobService"
import { useRouter } from "next/router"
import { ISkill } from "state/talent_profile/talentProfile.types"
import companyJobVideoService from "services/company/companyJobVideoService"
import { gaEvent } from "helper/libs/google-analytics/events/gaEvent"

export function useCompanyJobAction() {
  const router = useRouter()
  const { notify } = useNotificationAction()

  const { dispatch } = useContext(CompanyJobContext)
  const {
    addJob: addJobService,
    getJob: getJobService,
    updateJob: updateJobService,
  } = companyJobService()

  const { togglePrimaryVideo: togglePrimaryVideoService } =
    companyJobVideoService()

  const addJob = async (payload: AddJobPayload) => {
    if (!payload.status || !payload.company_id) return

    dispatch({
      type: CompanyJobActionEnum.ADD_COMPANY_JOB_BEGIN,
    })

    const { data, error } = await addJobService(payload)

    if (error) {
      dispatch({
        type: CompanyJobActionEnum.ADD_COMPANY_JOB_FAILURE,
      })

      notify({
        message: error.message,
        type: "warning",
      })
    } else if (data) {
      dispatch({
        type: CompanyJobActionEnum.ADD_COMPANY_JOB_SUCCESS,
      })

      router.push(`/c/jobs/${data[0].id}`)

      gaEvent("company_job_added", {
        category: "company",
      })
    }
  }

  const getJob = async (job_id: ICompanyJob["id"], company_id: string) => {
    if (!job_id) return

    dispatch({
      type: CompanyJobActionEnum.GET_COMPANY_JOB_BEGIN,
    })

    const { data, error } = await getJobService(job_id, company_id)

    if (error) {
      dispatch({
        type: CompanyJobActionEnum.GET_COMPANY_JOB_FAILURE,
      })
      notify({
        message: error.message,
        type: "warning",
      })
    } else if (data) {
      dispatch({
        type: CompanyJobActionEnum.GET_COMPANY_JOB_SUCCESS,
        payload: data,
      })
    }
  }

  const clearJob = () => {
    dispatch({
      type: CompanyJobActionEnum.CLEAR_COMPANY_JOB,
    })
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

    if (error) {
      notify({
        message: error.message,
        type: "warning",
      })
    }
  }

  const updateSalary = async (
    job_id: ICompanyJob["id"],
    salary: ICompanyJob["salary"]
  ) => {
    if (!job_id || !salary) return

    const { data } = await updateJobService(job_id, { salary: salary })

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

    if (error) {
      notify({
        message: error.message,
        type: "warning",
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

    if (error) {
      notify({
        message: error.message,
        type: "warning",
      })
    }
  }

  const addSkill = async (
    job_id: ICompanyJob["id"],
    newSkill: ISkill,
    skills: ISkill[] | null
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
        type: CompanyJobActionEnum.UPDATE_COMPANY_JOB_SKILLS,
        payload: data.skills,
      })
    }

    if (error) {
      notify({
        message: error.message,
        type: "warning",
      })
    }
  }

  const removeSkill = async (
    job_id: ICompanyJob["id"],
    skill: ISkill,
    skills: ISkill[] | null
  ) => {
    if (!job_id || !skill.id || !skills) return

    const { data, error } = await updateJobService(job_id, {
      skills: skills.filter((s) => s.id !== skill.id),
    })

    if (data) {
      dispatch({
        type: CompanyJobActionEnum.UPDATE_COMPANY_JOB_SKILLS,
        payload: data.skills,
      })
    }

    if (error) {
      notify({
        message: error.message,
        type: "warning",
      })
    }
  }

  const updateSkill = async (
    job_id: ICompanyJob["id"],
    skill: ISkill,
    skills: ISkill[] | null
  ) => {
    if (!job_id || !skill.id || !skills) return

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
        type: CompanyJobActionEnum.UPDATE_COMPANY_JOB_SKILLS,
        payload: data.skills,
      })
    }

    if (error) {
      notify({
        message: error.message,
        type: "warning",
      })
    }
  }

  const updateApplicationVideo = async (
    job_id: ICompanyJob["id"],
    application_video: ICompanyJob["application_video"]
  ) => {
    if (!job_id) return

    const { data, error } = await updateJobService(job_id, {
      application_video: application_video,
    })

    if (data) {
      dispatch({
        type: CompanyJobActionEnum.UPDATE_COMPANY_JOB_APPLICATION_VIDEO,
        payload: data.application_video,
      })
    }

    if (error) {
      notify({
        message: error.message,
        type: "warning",
      })
    }
  }

  const updateStatus = async ({
    job_id,
    status,
  }: {
    job_id: string
    status: string
  }) => {
    if (!job_id || !status) return

    const { data, error } = await updateJobService(job_id, {
      status: status,
    })

    if (data) {
      dispatch({
        type: CompanyJobActionEnum.UPDATE_COMPANY_JOB_STATUS,
        payload: data.status,
      })

      gaEvent(`company_job_${status}`, {
        category: "company",
      })
    }

    if (error) {
      notify({
        message: error.message,
        type: "warning",
      })
    }
  }

  const deleteJob = async (job_id: ICompanyJob["id"]) => {
    if (!job_id) return

    const { data, error } = await updateJobService(job_id, {
      status: JobStatusEnum.archived,
    })

    if (data) {
      dispatch({
        type: CompanyJobActionEnum.CLEAR_COMPANY_JOB,
      })

      gaEvent("company_job_archived", {
        category: "company",
      })
    }

    if (error) {
      notify({
        message: error.message,
        type: "warning",
      })
    }
  }

  const togglePrimaryVideo = async ({
    video_id,
    job_id,
  }: {
    video_id: string
    job_id: string
  }) => {
    if (!job_id || !video_id) return

    const { data, error } = await togglePrimaryVideoService(video_id, job_id)

    if (error) {
      notify({
        message: error.message,
        type: "warning",
      })
    } else if (data) {
      dispatch({
        type: CompanyJobActionEnum.TOGGLE_PRIMARY_VIDEO_SUCCESS,
        payload: data,
      })
    }
  }

  return {
    addJob,
    getJob,
    clearJob,
    updateStatus,
    updateTitle,
    updateSalary,
    updateWorkModel,
    updateLocation,
    addSkill,
    removeSkill,
    updateSkill,
    updateApplicationVideo,
    deleteJob,
    togglePrimaryVideo,
  }
}
