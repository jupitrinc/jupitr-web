import { useContext } from "react"
import {
  CompanyProfileActionEnum,
  ICompanyProfile,
} from "./companyProfile.types"
import { CompanyProfileContext } from "./CompanyProfileContext"
import useCompanyService from "services/company/useCompanyService"
import {
  LocalStorageItemEnum,
  localStorageHelper,
} from "helper/localStorageHelper"

export function useCompanyProfileAction() {
  const { dispatch } = useContext(CompanyProfileContext)
  const { getCompanyProfile, updateCompanyProfile } = useCompanyService()
  const { getItem } = localStorageHelper

  const getProfile = async (company_id: string) => {
    if (!company_id) return

    dispatch({
      type: CompanyProfileActionEnum.GET_COMPANY_PROFILE_BEGIN,
    })

    if (getItem(LocalStorageItemEnum.company_profile)) {
      dispatch({
        type: CompanyProfileActionEnum.GET_COMPANY_PROFILE_SUCCESS,
        payload: getItem(
          LocalStorageItemEnum.company_profile
        ) as ICompanyProfile,
      })
    } else {
      const { data, error } = await getCompanyProfile(company_id)

      if (error) {
        dispatch({
          type: CompanyProfileActionEnum.GET_COMPANY_PROFILE_FAILURE,
        })
      } else {
        dispatch({
          type: CompanyProfileActionEnum.GET_COMPANY_PROFILE_SUCCESS,
          payload: data as ICompanyProfile,
        })
      }
    }
  }

  const updateName = async (id: string, name: string) => {
    if (!id || !name) return

    const { data } = await updateCompanyProfile({ id, name: name })
    if (data) {
      dispatch({
        type: CompanyProfileActionEnum.UPDATE_NAME,
        payload: data[0].name,
      })
    }
  }

  const updateYearFounded = async (id: string, year_founded: string) => {
    if (!id || !year_founded) return

    const { data } = await updateCompanyProfile({
      id,
      year_founded: year_founded,
    })

    if (data) {
      dispatch({
        type: CompanyProfileActionEnum.UPDATE_YEAR_FOUNDED,
        payload: data[0].year_founded,
      })
    }
  }

  const updateWebsite = async (id: string, website: string) => {
    if (!id || !website) return

    const { data } = await updateCompanyProfile({
      id,
      website: website,
    })

    if (data) {
      dispatch({
        type: CompanyProfileActionEnum.UPDATE_WEBSITE,
        payload: data[0].website,
      })
    }
  }

  const updateSize = async (id: string, size: string) => {
    if (!id || !size) return

    const { data } = await updateCompanyProfile({
      id,
      size: size,
    })

    if (data) {
      dispatch({
        type: CompanyProfileActionEnum.UPDATE_SIZE,
        payload: data[0].size,
      })
    }
  }

  const updateIndustry = async (
    id: string,
    industry: ICompanyProfile["industry"]
  ) => {
    if (!id || !industry) return

    const { data } = await updateCompanyProfile({
      id,
      industry: industry,
    })

    if (data) {
      dispatch({
        type: CompanyProfileActionEnum.UPDATE_INDUSTRY,
        payload: data[0].industry,
      })
    }
  }

  const updateMission = async (id: string, mission: string) => {
    if (!id || !mission) return

    const { data } = await updateCompanyProfile({
      id,
      mission: mission,
    })

    if (data) {
      dispatch({
        type: CompanyProfileActionEnum.UPDATE_MISSION,
        payload: data[0].mission,
      })
    }
  }

  return {
    getProfile,
    updateName,
    updateYearFounded,
    updateWebsite,
    updateSize,
    updateIndustry,
    updateMission,
  }
}
