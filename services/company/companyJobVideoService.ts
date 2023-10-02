import { supabaseClientComponent } from "services/_supabase/client"

const COMPANY_VIDEOS_TABLE = "company_videos"

const companyJobVideoService = () => {
  const addVideo = async (payload: {
    job_id: string
    user_id: string
    video_url: string
  }) => {
    const { data, error } = await supabaseClientComponent
      .from(COMPANY_VIDEOS_TABLE)
      .insert(payload)
      .select()
      .single()

    if (error) {
      console.error("companyJobVideoService -> addVideo:", error.message)
    }

    return { data, error }
  }

  const deleteVideo = async (video_id: string) => {
    const { data, error } = await supabaseClientComponent
      .from(COMPANY_VIDEOS_TABLE)
      .delete()
      .eq("id", video_id)

    if (error) {
      console.error("companyJobVideoService -> deleteVideo:", error.message)
    }

    return { data, error }
  }

  const unsetPrimaryVideo = async (job_id: string) => {
    const { data, error } = await supabaseClientComponent
      .from(COMPANY_VIDEOS_TABLE)
      .update({ primary: false })
      .eq("job_id", job_id)
      .eq("primary", "true")

    if (error) {
      console.error(
        "companyJobVideoService -> unsetPrimaryVideo: ",
        error.message
      )
    }

    return { data, error }
  }

  const setPrimaryVideo = async (video_id: string, job_id: string) => {
    const { data, error } = await supabaseClientComponent
      .from(COMPANY_VIDEOS_TABLE)
      .update({ primary: true })
      .eq("id", video_id)
      .eq("job_id", job_id)
      .select()
      .single()

    if (error) {
      console.error(
        "companyJobVideoService -> setPrimaryVideo: ",
        error.message
      )
    }

    return { data, error }
  }

  const togglePrimaryVideo = async (video_id: string, job_id: string) => {
    const { error: err } = await unsetPrimaryVideo(job_id)

    if (!err) {
      const { data, error } = await setPrimaryVideo(video_id, job_id)

      return { data, error }
    }

    return {
      error: { message: "Failed to update cover video. Try again later" },
    }
  }

  return {
    addVideo,
    deleteVideo,
    togglePrimaryVideo,
  }
}

export default companyJobVideoService
