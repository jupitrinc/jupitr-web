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

export function useCompanyJobVideosAction() {
  const { dispatch } = useContext(CompanyJobVideosContext)
  const { dispatch: companyJobDispatch } = useContext(CompanyJobContext)
  const { uploadVideo } = useMediaService()
  const { deleteVideo: deleteVideoService, addVideo: addVideoService } =
    useCompanyJobVideoService()

  const addVideo = async (payload: AddVideoPayload) => {
    if (
      !payload.file ||
      !payload.company_id ||
      !payload.job_id ||
      !payload.user_id
    )
      return

    dispatch({
      type: CompanyJobVideosActionEnum.ADD_VIDEO_BEGIN,
    })

    const folderPath = storageFolderHelper.companyJobVideoFolder(payload)
    const fileName = payload.user_id

    const { data: upload_data, error: upload_error } = await uploadVideo({
      file: payload.file,
      folderPath: folderPath,
      fileName: fileName,
    })

    if (upload_error) {
      dispatch({
        type: CompanyJobVideosActionEnum.ADD_VIDEO_FAILURE,
        payload: upload_error,
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
          payload: "You seem to have already added a video",
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
    }
  }

  return {
    addVideo,
    deleteVideo,
  }
}
