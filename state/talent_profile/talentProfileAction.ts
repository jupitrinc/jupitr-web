import { useContext } from "react"
import {
  TalentProfileActionEnum,
  TalentProfileIndustry,
  TalentProfileJobCategory,
  TalentProfileSkill,
} from "./talentProfile.types"
import { TalentProfileContext } from "./TalentProfileContext"

export function talentProfileAction() {
  const { dispatch } = useContext(TalentProfileContext)

  const getProfile = async (language: string) => {
    if (!language) return

    const catchError = (errorMessage: string) => {
      dispatch({
        type: TalentProfileActionEnum.GET_PROFILE_FAILURE,
      })

      console.log(errorMessage)
    }

    try {
      dispatch({
        type: TalentProfileActionEnum.GET_PROFILE_BEGIN,
      })

      /* const response = await fetchRepos(language)
      if (response) {
        if (!response.ok) {
          getReposFailed(`No repositories found for the keyword ${language} :(`)
        } else {
          const data = await response.json()
          if (data.items) {
            dispatch({
              type: TalentProfileActionEnum.GET_USER_SUCCESS,
              payload: data.items,
            })
          }
        }
      } */
    } catch (error) {
      catchError(error as string)
    }
  }

  const addSkill = (skill: TalentProfileSkill) => {
    const { id, name, level } = skill
    if (!id || !name.trim() || !level) return

    dispatch({
      type: TalentProfileActionEnum.ADD_SKILL,
      payload: skill,
    })
  }

  const removeSkill = (skill: TalentProfileSkill) => {
    const { id, name, level } = skill
    if (!id || !name.trim() || !level) return

    dispatch({
      type: TalentProfileActionEnum.REMOVE_SKILL,
      payload: skill,
    })
  }

  const addJobCategory = (job_category: TalentProfileJobCategory) => {
    const { id, name } = job_category
    if (!id || !name.trim()) return

    dispatch({
      type: TalentProfileActionEnum.ADD_JOB_CATEGORY,
      payload: job_category,
    })
  }

  const removeJobCategory = (job_category: TalentProfileJobCategory) => {
    const { id, name } = job_category
    if (!id || !name.trim()) return

    dispatch({
      type: TalentProfileActionEnum.REMOVE_JOB_CATEGORY,
      payload: job_category,
    })
  }

  const addIndustry = (industry: TalentProfileJobCategory) => {
    const { id, name } = industry
    if (!id || !name.trim()) return

    dispatch({
      type: TalentProfileActionEnum.ADD_INDUSTRY,
      payload: industry,
    })
  }

  const removeIndustry = (industry: TalentProfileIndustry) => {
    const { id, name } = industry
    if (!id || !name.trim()) return

    dispatch({
      type: TalentProfileActionEnum.REMOVE_INDUSTRY,
      payload: industry,
    })
  }

  const addWorkModel = (work_model: string) => {
    console.log(work_model)

    if (!work_model.trim()) return

    dispatch({
      type: TalentProfileActionEnum.ADD_WORK_MODEL,
      payload: work_model,
    })
  }

  const removeWorkModel = (work_model: string) => {
    if (!work_model.trim()) return

    dispatch({
      type: TalentProfileActionEnum.REMOVE_WORK_MODEL,
      payload: work_model,
    })
  }

  const addLocation = (location: string) => {
    if (!location.trim()) return

    dispatch({
      type: TalentProfileActionEnum.ADD_LOCATION,
      payload: location,
    })
  }

  const removeLocation = (location: string) => {
    if (!location.trim()) return

    dispatch({
      type: TalentProfileActionEnum.REMOVE_LOCATION,
      payload: location,
    })
  }

  const addTechTest = (test: string) => {
    if (!test.trim()) return

    dispatch({
      type: TalentProfileActionEnum.ADD_TECH_TEST,
      payload: test,
    })
  }

  const removeTechTest = (test: string) => {
    if (!test.trim()) return

    dispatch({
      type: TalentProfileActionEnum.REMOVE_TECH_TEST,
      payload: test,
    })
  }

  const toggleVisaSponsorship = (toggle: boolean) => {
    dispatch({
      type: TalentProfileActionEnum.TOGGLE_VISA_SPONSORSHIP,
      payload: toggle,
    })
  }

  const updateSalary = (salary: number) => {
    dispatch({
      type: TalentProfileActionEnum.UPDATE_SALARY,
      payload: salary,
    })
  }

  return {
    getProfile,
    addSkill,
    removeSkill,
    addJobCategory,
    removeJobCategory,
    addIndustry,
    removeIndustry,
    addWorkModel,
    removeWorkModel,
    addLocation,
    removeLocation,
    addTechTest,
    removeTechTest,
    toggleVisaSponsorship,
    updateSalary,
  }
}
