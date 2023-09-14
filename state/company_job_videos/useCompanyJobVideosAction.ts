import { useContext } from "react"
import { CompanyJobVideosContext } from "./CompanyJobVideosContext"
import {
  AddVideoPayload,
  CompanyJobVideosActionEnum,
  ICompanyJobVideo,
} from "./companyJobVideos.types"
import useMediaService from "services/storage/useMediaService"
import useCompanyJobVideoService from "services/company/useCompanyJobVideoService"
import { CompanyJobContext } from "state/company_job/CompanyJobContext"
import { CompanyJobActionEnum } from "state/company_job/companyJob.types"
import { storageFolderHelper } from "helper/storageFolderHelper"
import { useNotificationAction } from "state/notification/useNotificationAction"

export function useCompanyJobVideosAction() {
  const { notify } = useNotificationAction()

  const { dispatch } = useContext(CompanyJobVideosContext)
  const { dispatch: companyJobDispatch } = useContext(CompanyJobContext)
  const { uploadVideo } = useMediaService()
  const { deleteVideo: deleteVideoService, addVideo: addVideoService } =
    useCompanyJobVideoService()

  const addVideo = async (payload: AddVideoPayload) => {
    dispatch({
      type: CompanyJobVideosActionEnum.ADD_VIDEO_BEGIN,
    })

    if (
      !payload.file ||
      !payload.company_id ||
      !payload.job_id ||
      !payload.user_id
    ) {
      dispatch({
        type: CompanyJobVideosActionEnum.ADD_VIDEO_FAILURE,
      })

      notify({
        message: "Something went wrong, try again",
        type: "warning",
      })

      return
    }

    const folderPath = storageFolderHelper.companyJobVideoFolder(payload)
    const fileName = payload.user_id

    const { data: upload_data, error: upload_error } = await uploadVideo({
      file: payload.file,
      folderPath: folderPath,
      fileName: `${fileName + "-" + Date.now()}`,
    })

    if (upload_error) {
      notify({
        message: upload_error,
        type: "warning",
      })
    } else {
      const cdn_video = upload_data.public_id

      const { data, error } = await addVideoService({
        user_id: payload.user_id,
        job_id: payload.job_id,
        video_url: cdn_video,
      })

      if (error) {
        dispatch({
          type: CompanyJobVideosActionEnum.ADD_VIDEO_FAILURE,
        })

        notify({
          message: error.message.includes("company_videos_video_url")
            ? "You have already added a video for this job"
            : error.message,
          type: "warning",
        })
      } else {
        companyJobDispatch({
          type: CompanyJobActionEnum.ADD_JOB_VIDEO,
          payload: data,
        })

        dispatch({
          type: CompanyJobVideosActionEnum.ADD_VIDEO_SUCCESS,
        })
      }
    }
  }

  const deleteVideo = async (video_id: ICompanyJobVideo["id"]) => {
    if (!video_id) return

    const { error } = await deleteVideoService(video_id)

    if (!error) {
      companyJobDispatch({
        type: CompanyJobActionEnum.DELETE_JOB_VIDEO,
        payload: video_id,
      })
    } else {
      notify({
        message: "Couldn't delete the video at this moment. Try again later",
        type: "warning",
      })
    }
  }

  return {
    addVideo,
    deleteVideo,
  }
}
