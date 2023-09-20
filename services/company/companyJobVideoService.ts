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

  return {
    addVideo,
    deleteVideo,
  }
}

export default companyJobVideoService