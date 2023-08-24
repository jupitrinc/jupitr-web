import { supabaseClientComponent } from "services/_supabase/client"

const COMPANY_VIDEOS_TABLE = "company_videos"

const useCompanyJobVideoService = () => {
  const deleteVideo = async (video_id: string) => {
    const { data, error } = await supabaseClientComponent
      .from(COMPANY_VIDEOS_TABLE)
      .delete()
      .eq("id", video_id)

    if (error) {
      console.error("delete company job video: ", error)
    }

    return { data, error }
  }

  return {
    deleteVideo,
  }
}

export default useCompanyJobVideoService
