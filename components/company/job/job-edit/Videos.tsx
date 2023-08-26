import React from "react"
import { Card } from "ui-library/content/card/Card"
import { SectionHeader } from "ui-library/content/section-header/SectionHeader"
import { CompanyJobVideosContextProvider } from "state/company_job_videos/CompanyJobVideosContext"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import AddVideos from "./videos/AddVideos"
import VideoCard from "./videos/VideoCard"

export const Videos = () => {
  const { videos } = useCompanyJobState()

  return (
    <Card type="section">
      <div className="flex flex-col gap-5">
        <SectionHeader title="Videos" />

        <CompanyJobVideosContextProvider>
          <AddVideos />
        </CompanyJobVideosContextProvider>
      </div>

      {videos &&
        videos.map((video) => <VideoCard key={video.id} video={video} />)}
    </Card>
  )
}
