import { useContext } from "react"
import { CompanyVideosContext } from "./CompanyVideosContext"
import { AddVideoPayload, CompanyVideosActionEnum } from "./companyVideos.types"
import useMediaService from "services/storage/useMediaService"

export function useCompanyVideosAction() {
  const { dispatch } = useContext(CompanyVideosContext)
  const { uploadJobVideo } = useMediaService()

  const addVideo = async (payload: AddVideoPayload) => {
    if (
      !payload.file ||
      !payload.company_id ||
      !payload.job_id ||
      !payload.user_id
    )
      return

    dispatch({
      type: CompanyVideosActionEnum.ADD_VIDEO_BEGIN,
    })

    const { data, error } = await uploadJobVideo(payload)

    if (error) {
      dispatch({
        type: CompanyVideosActionEnum.ADD_VIDEO_FAILURE,
        payload: error,
      })

      console.log(error)
    } else {
      dispatch({
        type: CompanyVideosActionEnum.ADD_VIDEO_SUCCESS,
      })

      console.log(data)
    }
  }

  return {
    addVideo,
  }
}
