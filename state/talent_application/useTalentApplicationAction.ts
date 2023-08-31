import { useContext } from "react"
import { TalentApplicationContext } from "./TalentApplicationContext"
import useMediaService from "services/storage/useMediaService"
import { storageFolderHelper } from "helper/storageFolderHelper"
import {
  AddApplicationPayload,
  TalentApplicationActionEnum,
} from "./talentApplication.types"
import useTalentJobApplicationService from "services/talent/useTalentApplicationService"

export function useTalentApplicationAction() {
  const { dispatch } = useContext(TalentApplicationContext)
  const { uploadVideo } = useMediaService()
  const { addApplication: addApplicationService } =
    useTalentJobApplicationService()

  const toggleStatus = (value: string) => {
    dispatch({
      type: TalentApplicationActionEnum.TOGGLE_STATUS,
      payload: value,
    })
  }

  const addApplication = async (payload: AddApplicationPayload) => {
    dispatch({
      type: TalentApplicationActionEnum.ADD_APPLICATION_BEGIN,
    })

    if (
      !payload.file ||
      !payload.job_id ||
      !payload.user_id ||
      !payload.company_id ||
      !payload.skills
    ) {
      dispatch({
        type: TalentApplicationActionEnum.ADD_APPLICATION_FAILURE,
        payload: "Something went wrong, try again",
      })

      return
    }

    const folderPath = storageFolderHelper.jobApplicationVideoFolder(payload)
    const fileName = payload.user_id

    const { data: upload_data, error: upload_error } = await uploadVideo({
      file: payload.file,
      folderPath: folderPath,
      fileName: fileName,
    })

    if (upload_error) {
      dispatch({
        type: TalentApplicationActionEnum.ADD_APPLICATION_FAILURE,
        payload: upload_error,
      })
    } else {
      const cdn_video = upload_data.public_id

      const { data, error } = await addApplicationService({
        user_id: payload.user_id,
        job_id: payload.job_id,
        video_url: cdn_video,
        skills: payload.skills,
      })

      if (error) {
        dispatch({
          type: TalentApplicationActionEnum.ADD_APPLICATION_FAILURE,
          payload: error.message.includes("applications_video_url")
            ? "Already applied"
            : error.message,
        })
      } else {
        dispatch({
          type: TalentApplicationActionEnum.ADD_APPLICATION_SUCCESS,
        })
      }
    }
  }

  return {
    addApplication,
    toggleStatus,
  }
}
