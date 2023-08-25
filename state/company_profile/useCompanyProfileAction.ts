import { useContext } from "react"
import {
  CompanyProfileActionEnum,
  ICompanyProfile,
} from "./companyProfile.types"
import { CompanyProfileContext } from "./CompanyProfileContext"
import useCompanyService from "services/company/useCompanyService"
import { MediaPayload, StorageBucketsEnum } from "services/storage/media.types"
import useMediaService from "services/storage/useMediaService"
import { imageHelper } from "helper/imageHelper"
import { storageFolderHelper } from "helper/storageFolderHelper"

export function useCompanyProfileAction() {
  const { dispatch } = useContext(CompanyProfileContext)
  const { getCompanyProfile, updateCompanyProfile } = useCompanyService()
  const { uploadMedia } = useMediaService()
  const { companyLogoFolder } = storageFolderHelper

  const getProfile = async (company_id: string) => {
    if (!company_id) return

    dispatch({
      type: CompanyProfileActionEnum.GET_COMPANY_PROFILE_BEGIN,
    })

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

  const uploadLogo = (
    file: MediaPayload["file"],
    filePath: MediaPayload["filePath"],
    id: string
  ) => {
    uploadMedia({
      bucketName: StorageBucketsEnum.images,
      file,
      filePath,
    }).then(({ data, error }) => {
      if (data?.path) {
        updateCompanyProfile({ id, logo: data?.path }).then(
          ({ data, error }) => {
            if (data) {
              dispatch({
                type: CompanyProfileActionEnum.UPDATE_LOGO,
                payload: data.logo,
              })
            }
          }
        )
      }
    })
  }

  const updateLogo = async (company_id: string, logo: File) => {
    if (!company_id || !logo) return

    const fileExt = logo.name.split(".").pop()
    const fileName = `${company_id}.${fileExt}`
    const filePath = `${companyLogoFolder(
      company_id
    )}/${fileName}&updated=${Date.now()}`
    const resizedFile = await imageHelper.resize(logo)
    uploadLogo(resizedFile, filePath, company_id)
  }

  const updateName = async (id: string, name: string) => {
    if (!id || !name) return

    const { data } = await updateCompanyProfile({ id, name: name })
    if (data) {
      dispatch({
        type: CompanyProfileActionEnum.UPDATE_NAME,
        payload: data.name,
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
        payload: data.year_founded,
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
        payload: data.website,
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
        payload: data.size,
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
        payload: data.industry,
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
        payload: data.mission,
      })
    }
  }

  const clearProfile = async () => {
    dispatch({
      type: CompanyProfileActionEnum.CLEAR_COMPANY_PROFILE,
    })
  }

  return {
    getProfile,
    updateLogo,
    updateName,
    updateYearFounded,
    updateWebsite,
    updateSize,
    updateIndustry,
    updateMission,
    clearProfile,
  }
}
